import { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from './_app'
import { store } from '../lib/store'
import { ArrowLeft, CheckCircle, BookOpen, Code, MapPin, Send } from 'lucide-react'

const positions = [
  { id: 'content', title: 'content contributor', icon: BookOpen, description: 'create lecture notes and reading guides for classic works.', commitment: '5-10 hrs/week' },
  { id: 'chapter', title: 'local chapter', icon: MapPin, description: 'start a classic revival chapter at your school or community.', commitment: '3-8 hrs/week' },
  { id: 'developer', title: 'developer', icon: Code, description: 'help build features and tools for the platform.', commitment: '5-15 hrs/week' },
]

export default function Apply() {
  const { user, isLoggedIn } = useContext(AuthContext)
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
    if (!formData.name.trim()) newErrors.name = 'required'
    if (!formData.email.trim()) newErrors.email = 'required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'invalid email'
    if (!selectedPosition) newErrors.position = 'please select a position'
    if (!formData.motivation.trim()) newErrors.motivation = 'please share your motivation'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      store.addApplication({
        ...formData,
        position: positions.find(p => p.id === selectedPosition)?.title || selectedPosition,
        userId: user?.id || null
      })
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <>
        <Head><title>application submitted | classic revival</title></Head>
        <Navbar />
        <main className="pt-16 min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-md mx-auto px-4 text-center animate-fadeInUp">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(45, 74, 62, 0.15)' }}>
              <CheckCircle className="w-10 h-10" style={{ color: 'var(--forest)' }} />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>application submitted!</h1>
            <p className="font-body mb-8" style={{ color: 'var(--text-secondary)' }}>
              thank you for your interest in joining classic revival. we'll review your application and get back to you soon.
            </p>
            <Link href="/" className="btn-primary">return to home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head><title>apply | classic revival</title></Head>
      <Navbar />

      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <section className="py-12" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #142d4a 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#apply-section" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 font-accent">
              <ArrowLeft className="w-4 h-4" /> back
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">join our team</h1>
            <p className="font-body text-white/80">be part of the movement to bring classic literature back to life.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>select a position</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {positions.map((position) => {
                const Icon = position.icon
                const isSelected = selectedPosition === position.id
                return (
                  <button
                    key={position.id}
                    onClick={() => setSelectedPosition(position.id)}
                    className="text-left p-5 rounded-xl transition-all"
                    style={{
                      background: isSelected ? 'rgba(114, 47, 55, 0.1)' : 'var(--bg-secondary)',
                      border: `1px solid ${isSelected ? 'var(--burgundy)' : 'var(--border-color)'}`
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ 
                        background: isSelected ? 'var(--burgundy)' : 'rgba(114, 47, 55, 0.1)',
                        color: isSelected ? 'white' : 'var(--burgundy)'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{position.title}</h3>
                    <p className="font-body text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{position.description}</p>
                    <p className="font-accent text-xs" style={{ color: 'var(--text-secondary)' }}>{position.commitment}</p>
                  </button>
                )
              })}
            </div>
            {errors.position && <p className="text-red-400 text-center mb-6 -mt-8">{errors.position}</p>}

            <div className="max-w-2xl mx-auto">
              <div className="rounded-xl p-6 md:p-8" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <h2 className="font-display text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>application form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>full name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-classic text-sm" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-classic text-sm" />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="input-classic text-sm" />
                    </div>
                    <div>
                      <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>location</label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="city, country" className="input-classic text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>relevant experience</label>
                    <textarea name="experience" value={formData.experience} onChange={handleChange} rows={2} className="input-classic text-sm resize-none" placeholder="tell us about your experience..." />
                  </div>

                  <div>
                    <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>why do you want to join? *</label>
                    <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows={3} className="input-classic text-sm resize-none" placeholder="share your motivation..." />
                    {errors.motivation && <p className="text-red-400 text-xs mt-1">{errors.motivation}</p>}
                  </div>

                  <div>
                    <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>portfolio/linkedin</label>
                    <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://..." className="input-classic text-sm" />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> submit application
                  </button>
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
