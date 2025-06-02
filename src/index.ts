import path from 'path';
import { Command } from 'commander';
import { osLocale } from 'os-locale';
import type { CursorTranslator } from './cursorTranslateService/CursorTranslator';
import { WindowsCursorTranslateService } from './cursorTranslateService/WindowsCursorTranslator';
import { getSupportedLanguageCodes, loadLanguageReplacements } from './utils/langModule';
import { getCursorIdeInstallPathMethod1 } from './utils/registry';

interface CommandLineOptions {
  lang: string;
}

const INTERCEPTOR_FILE_NAME = 'cursorTranslatorMain.js';

function main() {
  const program = new Command();

  program
    .name('cursor-translate')
    .description('CLI tool')
    .version('0.0.3', '-v, --version', 'Show version information');

  program
    .command('apply')
    .description('Apply language patch')
    .option('-l, --lang <language>', 'language setting', 'auto')
    .action((options: CommandLineOptions) => {
      void applyOrRevertLanguagePatch('apply', options.lang);
    });

  program
    .command('revert')
    .description('Revert language patch')
    .action(() => {
      void applyOrRevertLanguagePatch('revert');
    });

  program
    .command('list')
    .description('List available languages')
    .action(() => {
      void listAvailableLanguages();
    });

  program.parse();
}

async function applyLanguagePatch(lang: string) {
  const appliedLang = lang === 'auto' ? (await osLocale()).toLocaleLowerCase() : lang.toLowerCase();

  const availableLanguages = getSupportedLanguageCodes();
  if (!availableLanguages.includes(appliedLang)) {
    console.error(`❌ Language "${appliedLang}" is not available.`);
    console.log('ℹ️  Available languages:');
    await listAvailableLanguages();
    return;
  }

  console.log(`🌍 Applying language patch for: ${appliedLang}`);

  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
  const replacements = await loadLanguageReplacements(appliedLang);

  const cursorTranslators: CursorTranslator[] = [
    new WindowsCursorTranslateService(cursorIdeInstallPath, path.resolve(`./interceptor/${INTERCEPTOR_FILE_NAME}`)),
  ];

  for (const translator of cursorTranslators) {
    if (!translator.isSupported(process.platform)) {
      console.error(`❌ ${translator.constructor.name} is not supported on this platform.`);
      continue;
    }

    translator.install(replacements);
    break;
  }
}

async function revertLanguagePatch() {
  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();

  const cursorTranslators: CursorTranslator[] = [
    new WindowsCursorTranslateService(cursorIdeInstallPath, path.resolve(`./interceptor/${INTERCEPTOR_FILE_NAME}`)),
  ];

  for (const translator of cursorTranslators) {
    if (!translator.isSupported(process.platform)) {
      console.error(`❌ ${translator.constructor.name} is not supported on this platform.`);
      continue;
    }

    translator.uninstall();
    break;
  }
}

async function listAvailableLanguages(): Promise<void> {
  const languages = getSupportedLanguageCodes();
  if (languages.length === 0) {
    console.log('No languages available.');
    return;
  }

  const recommendedLanguage = (await osLocale()).toLocaleLowerCase();
  console.log('\nAvailable languages:');
  for (const lang of languages) {
    if (lang.toLowerCase() === recommendedLanguage) {
      console.log(`✅ ${lang} (Recommended)`);
    }
    else {
      console.log(`ℹ️  ${lang}`);
    }
  }
}

async function applyOrRevertLanguagePatch(action: 'apply' | 'revert', lang?: string): Promise<void> {
  // check windows platform
  if (process.platform !== 'win32') {
    console.error('Platform:', process.platform);
    console.error('❌ Currently only Windows is supported.');
    return;
  }
  const locale = await osLocale();
  console.log(`🌍 Detected system locale: ${locale}`);

  if (action === 'apply') {
    await applyLanguagePatch(lang ?? 'auto');
  }
  else {
    await revertLanguagePatch();
  }
}

if (require.main === module) {
  Promise.try(main).catch((error: unknown) => {
    console.error('\n❌ An error occurred:', error);
    console.log('\nIf you need support, please create a GitHub issue.');
    process.exit(1);
  });
}
