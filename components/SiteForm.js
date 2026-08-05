import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { site } from '../lib/content/site'
import { submitForm } from '../lib/forms'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateField(field, value) {
  const empty = value == null || String(value).trim() === ''
  if (field.required && empty) return 'This field is required.'
  if (!empty && field.type === 'email' && !EMAIL_RE.test(value)) return 'Please enter a valid email address.'
  if (!empty && field.type === 'url' && !/^https?:\/\/.+/.test(value)) return 'Please enter a full URL starting with http:// or https://.'
  return null
}

/**
 * Schema-driven form renderer. Pass a schema from lib/content/forms.js.
 * Handles validation, an accessible error summary, a honeypot, and an
 * honest fallback when no form backend is connected (see lib/forms.js).
 * Fields render through the shadcn primitives (Input, Textarea, Select,
 * RadioGroup), all themed by the house tokens.
 */
export default function SiteForm({ schema }) {
  const initial = Object.fromEntries(schema.fields.map((f) => [f.name, '']))
  const [values, setValues] = useState(initial)
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null) // { delivered, mailto? }
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot: bots fill hidden fields; pretend success, send nothing.
    if (honeypot) {
      setResult({ delivered: true })
      return
    }
    const newErrors = {}
    for (const field of schema.fields) {
      const err = validateField(field, values[field.name])
      if (err) newErrors[field.name] = err
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      const firstInvalid = document.getElementById(`${schema.slug}-${Object.keys(newErrors)[0]}`)
      firstInvalid?.focus()
      return
    }
    setSubmitting(true)
    setSubmitError(null)
    try {
      setResult(await submitForm(schema.slug, values))
    } catch {
      setSubmitError('Something went wrong sending your message. Please try again, or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (result?.delivered) {
    return (
      <div className="form-notice flex items-start gap-3" role="status">
        <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
        <div>
          <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Submitted</p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{schema.success}</p>
        </div>
      </div>
    )
  }

  if (result && !result.delivered) {
    return (
      <div className="form-notice" role="status">
        <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          One more step — send it by email
        </p>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          Our online form inbox isn’t connected yet, so nothing has been sent automatically.
          The button below opens a prefilled email with your answers — just press send.
        </p>
        <a href={result.mailto} className="btn-primary text-sm">
          <Mail className="w-4 h-4" /> Send as email
        </a>
        <p className="text-xs mt-3" style={{ color: 'var(--text-secondary)' }}>
          Or write to us directly at{' '}
          <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {schema.fields.map((field) => {
        const id = `${schema.slug}-${field.name}`
        const errId = `${id}-error`
        const helpId = `${id}-help`
        const error = errors[field.name]
        const describedBy = [error ? errId : null, field.help ? helpId : null].filter(Boolean).join(' ') || undefined

        return (
          <div key={field.name}>
            <Label
              htmlFor={field.type === 'radio' ? undefined : id}
              id={field.type === 'radio' ? `${id}-label` : undefined}
              className="form-label"
            >
              {field.label}
              {field.required && (
                <span aria-hidden="true" style={{ color: 'var(--error)' }}> *</span>
              )}
            </Label>

            {field.type === 'textarea' ? (
              <Textarea
                id={id}
                name={field.name}
                rows={field.rows || 3}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                autoComplete={field.autoComplete}
                className="resize-y"
              />
            ) : field.type === 'select' ? (
              <Select
                value={values[field.name] || undefined}
                onValueChange={(v) => handleChange(field.name, v)}
              >
                <SelectTrigger
                  id={id}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={describedBy}
                  className={error ? 'border-destructive' : undefined}
                >
                  <SelectValue placeholder="Select…" />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : field.type === 'radio' ? (
              <RadioGroup
                value={values[field.name] || ''}
                onValueChange={(v) => handleChange(field.name, v)}
                aria-labelledby={`${id}-label`}
                aria-describedby={describedBy}
                aria-invalid={error ? true : undefined}
                className="mt-2 space-y-2.5"
              >
                {field.options.map((opt, i) => (
                  <div key={opt} className="flex items-start gap-2.5">
                    <RadioGroupItem value={opt} id={i === 0 ? id : `${id}-${i}`} className="mt-0.5" />
                    <Label
                      htmlFor={i === 0 ? id : `${id}-${i}`}
                      className="cursor-pointer text-sm font-normal leading-snug"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {opt}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Input
                id={id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                autoComplete={field.autoComplete}
              />
            )}

            {field.help && <p id={helpId} className="form-help">{field.help}</p>}
            {error && <p id={errId} className="form-error" role="alert">{error}</p>}
          </div>
        )
      })}

      {/* Honeypot — hidden from real users, tempting to bots */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
        <label htmlFor={`${schema.slug}-website2`}>Leave this field empty</label>
        <input
          id={`${schema.slug}-website2`}
          type="text"
          name="website2"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {submitError && (
        <p className="form-error" role="alert">
          {submitError}{' '}
          <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a>
        </p>
      )}

      <Button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Submit'}
      </Button>
      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
        We only use what you share here to respond to you. We never publish or sell it.
      </p>
    </form>
  )
}
