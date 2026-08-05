import { Fraunces, Inter } from 'next/font/google'

/**
 * Self-hosted fonts via next/font — no render-blocking Google Fonts
 * request, zero layout shift (size-adjusted fallbacks are automatic).
 * The CSS variables are attached to <Html> in _document.js so every
 * rule in globals.css can reference them.
 */
export const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
})
