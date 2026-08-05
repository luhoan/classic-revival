import { site } from './content/site'
import { forms } from './content/forms'

/**
 * FORM DELIVERY INTEGRATION POINT
 * -------------------------------
 * Submissions are delivered to the organization's inbox via
 * FormSubmit's AJAX endpoint (no account required). NOTE: the very
 * first submission triggers a one-time activation email from
 * formsubmit.co to that inbox — click the link in it once and all
 * future submissions flow through.
 *
 * To switch providers later (Formspree, your own API route, …),
 * change this URL. Submissions POST as JSON:
 *   { form: '<slug>', _subject: '…', ...answers }.
 *
 * If FORM_ENDPOINT is set to null, no submission is stored anywhere;
 * the form UI says so honestly and offers a prefilled email instead.
 */
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.contact.email}`

function buildMailto(slug, data) {
  const schema = forms[slug]
  const subject = `[Classic Revival] ${schema ? schema.title : slug}`
  const lines = Object.entries(data)
    .filter(([key, value]) => key !== 'website2' && value !== '' && value != null)
    .map(([key, value]) => {
      const field = schema?.fields.find((f) => f.name === key)
      return `${field ? field.label : key}: ${value}`
    })
  const body = lines.join('\n')
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Submit a form. Returns:
 *   { delivered: true }                    — sent to FORM_ENDPOINT
 *   { delivered: false, mailto: '...' }    — no backend configured;
 *                                            caller should offer the mailto
 */
export async function submitForm(slug, data) {
  if (FORM_ENDPOINT) {
    const schema = forms[slug]
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        form: slug,
        _subject: `[Classic Revival] ${schema ? schema.title : slug}`,
        ...data,
      }),
    })
    // FormSubmit reports failures (e.g. "form needs activation") as
    // HTTP 200 with success:"false" — only a confirmed success counts
    // as delivered; anything else falls back to the honest mailto path.
    if (res.ok) {
      const body = await res.json().catch(() => null)
      if (body && (body.success === true || body.success === 'true')) {
        return { delivered: true }
      }
    }
    return { delivered: false, mailto: buildMailto(slug, data) }
  }
  return { delivered: false, mailto: buildMailto(slug, data) }
}
