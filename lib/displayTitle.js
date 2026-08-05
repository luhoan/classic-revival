/**
 * Cleans up raw catalog titles (often imported from Project Gutenberg)
 * for display: strips bracketed editorial notes, long subtitles, and
 * volume suffixes, and fixes lowercase titles.
 *
 *   "Eugene Oneguine [Onegin] A Romance of Russian Life in Verse"
 *     → "Eugene Oneguine"
 *   "Measure for Measure: The Works of William Shakespeare"
 *     → "Measure for Measure"
 *   "ajax" → "Ajax"
 *
 * The full original title remains available everywhere via book.title;
 * use this only where a clean short label reads better.
 */

const SMALL_WORDS = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with'])

export function displayTitle(raw) {
  if (!raw) return ''
  let t = String(raw)

  // Drop bracketed/parenthetical editorial notes.
  t = t.replace(/\s*\[[^\]]*\]/g, ' ').replace(/\s*\([^)]*\)/g, ' ')

  // Keep only the main title when a subtitle follows a colon,
  // semicolon, or em dash (but never cut the title to nothing).
  const cut = t.split(/\s*(?::|;|—|--)\s*/)[0]
  if (cut.trim().length >= 3) t = cut

  // Trim ", Volume N …" / ", vol. N …" suffixes.
  t = t.replace(/,\s*vol(?:ume)?\.?\s.*$/i, '')

  t = t.replace(/\s+/g, ' ').trim().replace(/[,.]+$/, '')

  // Fix all-lowercase titles ("ajax", "the trial") with book title case.
  if (t === t.toLowerCase()) {
    t = t
      .split(' ')
      .map((word, i) =>
        i > 0 && SMALL_WORDS.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ')
  }

  return t
}
