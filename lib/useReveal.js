import { useEffect } from 'react'

/**
 * Scroll-reveal hook — call ONCE per page (in the page component).
 *
 * Progressive enhancement: stamps `js-reveal` on <html> so the CSS in
 * styles/globals.css can hide `.reveal` / `.reveal-stagger` elements and
 * transition them in when they enter the viewport. Without JavaScript
 * (or under prefers-reduced-motion) nothing is hidden and content is
 * fully visible.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Never removed on cleanup: un-stamping mid-navigation would re-hide
    // already-revealed content on other pages.
    document.documentElement.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document
      .querySelectorAll('.reveal, .reveal-stagger')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
