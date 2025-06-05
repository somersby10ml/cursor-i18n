#!/usr/bin/env node

import { Command } from 'commander';
import { osLocale } from 'os-locale';
import { langs } from '../lang/lang';
import type { CursorTranslator } from './cursorTranslateService/CursorTranslator';
import { WindowsCursorTranslateService } from './cursorTranslateService/WindowsCursorTranslator';
import cursorTranslatorMain from './cursorTranslatorMain.js.file' with { type: 'text' };
import { getCursorIdeInstallPathMethod1 } from './utils/registry';

const supportedLanguages = langs.map((l) => l.LOCALE.toLowerCase());

interface CommandLineOptions {
  lang: string;
}

function main() {
  const program = new Command();

  program
    .name('cursor-i18n')
    .description('CLI tool')
    .version('0.0.3', '-v, --version', 'Show version information');

  program
    .command('apply')
    .description('Apply language patch')
    .option('-l, --lang <language>', 'language setting(e.g ko-kr)', 'auto')
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

  if (!supportedLanguages.includes(appliedLang)) {
    console.error(`❌ Language "${appliedLang}" is not available.`);
    console.log('ℹ️  Available languages:');
    await listAvailableLanguages();
    return;
  }

  console.log(`🌍 Applying language patch for: ${appliedLang}`);

  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();
  const applyLang = langs.find((l) => l.LOCALE.toLowerCase() === appliedLang);
  if (!applyLang) {
    console.error(`❌ Language "${appliedLang}" not found in supported languages.`);
    return;
  }

  const cursorTranslators: CursorTranslator[] = [
    new WindowsCursorTranslateService(cursorIdeInstallPath, cursorTranslatorMain),
  ];

  for (const translator of cursorTranslators) {
    if (!translator.isSupported(process.platform)) {
      console.error(`❌ ${translator.constructor.name} is not supported on this platform.`);
      continue;
    }

    translator.install(applyLang.REPLACEMENTS);
    break;
  }
}

async function revertLanguagePatch() {
  const cursorIdeInstallPath = await getCursorIdeInstallPathMethod1();

  const cursorTranslators: CursorTranslator[] = [
    new WindowsCursorTranslateService(cursorIdeInstallPath, cursorTranslatorMain),
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
  if (supportedLanguages.length === 0) {
    console.log('No languages available.');
    return;
  }

  const recommendedLanguage = (await osLocale()).toLocaleLowerCase();
  console.log('\nAvailable languages:');
  for (const lang of supportedLanguages) {
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

main();
