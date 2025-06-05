import { z } from 'zod';

export const ReplacementSchema = z.object({
  originalText: z.string(),
  changeText: z.string(),

  /**
   * searchType
   * exact: the original text must match exactly
   * partial: the original text can be partially matched
   */
  searchType: z.union([
    z.literal('exact'),
    z.literal('partial'),
    z.literal('regex'),
  ]),
  flags: z.string().optional(),
});

export const LangModuleSchema = z.object({
  REPLACEMENTS: z.array(ReplacementSchema),
});

export const ReplacementsArraySchema = z.array(ReplacementSchema);
export type Replacement = z.infer<typeof ReplacementSchema>;
