import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { type Replacement, LangModuleSchema } from '../../lang/types';

/**
 * Safely imports a language module dynamically and returns the REPLACEMENTS array.
 * @param langCode The language code to load (e.g., 'ko-kr', 'en-us').
 * @returns
 */
export async function loadLanguageReplacements(langCode: string): Promise<Replacement[]> {
  try {
    // Resolve path for .ts file dynamic import on Windows
    const langPath = path.resolve('lang', `${langCode}.ts`);
    if (!fs.existsSync(langPath)) {
      throw new Error(`Language file not found: ${langPath}`);
    }
    // file:// prefix is required for esm import
    const modulePath = `file://${langPath}`;
    const mod = (await import(modulePath)) as unknown;

    // Validate schema with zod
    const replacements = LangModuleSchema.parse(mod).REPLACEMENTS;
    return replacements;
  }
  catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error('Invalid REPLACEMENTS schema: ' + err.message);
    }
    throw new Error('Failed to load language module: ' + (err instanceof Error ? err.message : String(err)));
  }
}

/**
 * Returns a list of supported language codes (filters .ts files except types.ts)
 */
export function getSupportedLanguageCodes(): string[] {
  const langDir = path.resolve('lang');
  const files = fs.readdirSync(langDir);
  return files
    .filter((f) => f.endsWith('.ts') && f !== 'types.ts')
    .map((f) => f.replace(/\.ts$/, ''));
}
