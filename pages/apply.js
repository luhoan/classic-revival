import { useState, useContext } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { PageHero } from '../components/ui'
import { AuthContext } from './_app'
import { store } from '../lib/store'
import { submitForm } from '../lib/forms'
import { CheckCircle, BookOpen, Code, MapPin } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'
import { useReveal } from '../lib/useReveal'

const positions = [
  { id: 'content', title: 'Content Contributor', icon: BookOpen, description: 'Write lecture notes and reading guides for classic works.', commitment: '5–10 hrs/week' },
  { id: 'chapter', title: 'Local Chapter Lead', icon: MapPin, description: 'Start a Classic Revival chapter at your school or in your community.', commitment: '3–8 hrs/week' },
  { id: 'developer', title: 'Developer', icon: Code, description: 'Help build features and tools for the platform and digital library.', commitment: '5–15 hrs/week' },
]

export default function Apply() {
  useReveal()
  const { user } = useContext(AuthContext)
  const [selectedPosition, setSelectedPosition] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    motivation: '',
    portfolio: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'This field is required.'
    if (!formData.email.trim()) newErrors.email = 'This field is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.'
    if (!selectedPosition) newErrors.position = 'Please select a position above.'
    if (!formData.motivation.trim()) newErrors.motivation = 'Please share your motivation.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const position = positions.find(p => p.id === selectedPosition)?.title || selectedPosition
      store.addApplication({
        ...formData,
        position,
        userId: user?.id || null
      })
      // Also deliver the application to the organization's inbox.
      submitForm('team-application', { ...formData, position }).catch(() => {})
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <>
        <Seo title="Application Submitted" description="Thank you for applying to join the Classic Revival team." path="/apply" />
        <Navbar />
        <main id="main" className="pt-16 min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-md mx-auto px-4 text-center animate-fadeInUp py-24">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(47, 107, 79, 0.15)' }}>
              <CheckCircle className="w-10 h-10" style={{ color: 'var(--success)' }} />
            </div>
            <h1 className="text-3xl mb-4">Application submitted</h1>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Thank you for your interest in joining Classic Revival. We read every
              application and will get back to you soon.
            </p>
            <Link href="/" className="btn-primary">Return home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Seo
        title="Join the Team"
        description="Apply to join Classic Revival — write reading guides, lead a local chapter, or help build the platform."
        path="/apply"
      />
      <Navbar />

      <main id="main" className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <PageHero
          eyebrow="Get Involved"
          title="Join the team"
          lead="Classic Revival is built and run by students. If you want to shape the work itself — the guides, the chapters, the platform — this is the door."
        />

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <fieldset className="mb-12">
              <legend className="eyebrow mb-6">Step 1 — Choose a role</legend>
              <div className="grid md:grid-cols-3 gap-5 reveal-stagger">
                {positions.map((position) => {
                  const Icon = position.icon
                  const isSelected = selectedPosition === position.id
                  return (
                    <button
                      key={position.id}
                      type="button"
                      onClick={() => setSelectedPosition(position.id)}
                      aria-pressed={isSelected}
                      className="card-classic text-left transition-all"
                      style={{
                        borderColor: isSelected ? 'var(--burgundy)' : 'var(--border-color)',
                        boxShadow: isSelected ? '0 0 0 1px var(--burgundy)' : 'none',
                        background: isSelected ? 'var(--card-hover)' : 'var(--card-bg)',
                      }}
                    >
                      <span
                        className="w-10 h-10 rounded-[2px] flex items-center justify-center mb-4"
                        style={{
                          background: isSelected ? 'var(--burgundy)' : 'rgba(74, 108, 148, 0.12)',
                          color: isSelected ? '#fff' : 'var(--burgundy)',
                        }}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <span className="block font-display text-lg font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        {position.title}
                      </span>
                      <span className="block text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {position.description}
                      </span>
                      <span
                        className="inline-block text-xs font-semibold uppercase tracking-[0.08em]"
                        style={{ color: isSelected ? 'var(--burgundy)' : 'var(--text-secondary)' }}
                      >
                        {position.commitment}
                      </span>
                    </button>
                  )
                })}
              </div>
              {errors.position && <p className="form-error mt-4" role="alert">{errors.position}</p>}
            </fieldset>

            <div className="max-w-2xl mx-auto">
              <div className="card-elevated p-6 md:p-8">
                <div className="reveal">
                  <p className="eyebrow mb-2">Step 2 — Tell us about yourself</p>
                  <h2 className="text-2xl mb-8">Application</h2>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="apply-name" className="form-label">
                        Full name<span aria-hidden="true" style={{ color: 'var(--error)' }}> *</span>
                      </Label>
                      <Input id="apply-name" type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" aria-invalid={errors.name ? true : undefined} />
                      {errors.name && <p className="form-error" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="apply-email" className="form-label">
                        Email<span aria-hidden="true" style={{ color: 'var(--error)' }}> *</span>
                      </Label>
                      <Input id="apply-email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" aria-invalid={errors.email ? true : undefined} />
                      {errors.email && <p className="form-error" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="apply-phone" className="form-label">Phone</Label>
                      <Input id="apply-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" autoComplete="tel" />
                    </div>
                    <div>
                      <Label htmlFor="apply-location" className="form-label">Location</Label>
                      <Input id="apply-location" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, country" autoComplete="address-level2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="apply-experience" className="form-label">Relevant experience</Label>
                    <Textarea id="apply-experience" name="experience" value={formData.experience} onChange={handleChange} rows={3} className="resize-y" placeholder="Anything that shows how you work — school clubs, projects, writing, code." />
                  </div>

                  <div>
                    <Label htmlFor="apply-motivation" className="form-label">
                      Why do you want to join?<span aria-hidden="true" style={{ color: 'var(--error)' }}> *</span>
                    </Label>
                    <Textarea id="apply-motivation" name="motivation" value={formData.motivation} onChange={handleChange} rows={4} className="resize-y" placeholder="A few honest sentences are plenty." aria-invalid={errors.motivation ? true : undefined} />
                    {errors.motivation && <p className="form-error" role="alert">{errors.motivation}</p>}
                  </div>

                  <div>
                    <Label htmlFor="apply-portfolio" className="form-label">Portfolio / LinkedIn</Label>
                    <Input id="apply-portfolio" type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://…" />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit application
                  </Button>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    We only use what you share here to consider your application. We never publish or sell it.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
