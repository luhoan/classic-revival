import { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeContext } from './_app'
import { ArrowLeft, Heart, CheckCircle, CreditCard, Building, BookOpen, Users, Server } from 'lucide-react'

const donationAmounts = [25, 50, 100, 250, 500]

const impactItems = [
  { amount: 25, description: 'Provides books for one student' },
  { amount: 50, description: 'Creates a reading guide with AI tools' },
  { amount: 100, description: 'Partners with a school library' },
  { amount: 250, description: 'Funds a community reading program' },
]

export default function Donate() {
  const { theme } = useContext(ThemeContext)
  const [donationType, setDonationType] = useState('one-time')
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    anonymous: false
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmount = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Required'
    if (!formData.email.trim()) newErrors.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Required'
      if (!formData.expiry.trim()) newErrors.expiry = 'Required'
      if (!formData.cvv.trim()) newErrors.cvv = 'Required'
    }
    if (!finalAmount || finalAmount < 1) newErrors.amount = 'Select an amount'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Head><title>Thank You | Classic Revival</title></Head>
        <Navbar />
        <main className="pt-16 min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-md mx-auto px-4 text-center animate-fadeInUp">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(114, 47, 55, 0.15)' }}>
              <Heart className="w-10 h-10" style={{ color: 'var(--burgundy)' }} />
            </div>
            <h1 className="font-display text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Thank You!</h1>
            <p className="font-body mb-8" style={{ color: 'var(--text-secondary)' }}>
              Your donation of <span className="font-semibold" style={{ color: 'var(--burgundy)' }}>${finalAmount}</span> will help bring classic literature to students everywhere.
            </p>
            <Link href="/" className="btn-primary">Return to Home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Donate | Classic Revival</title>
        <meta name="description" content="Support Classic Revival with a donation" />
      </Head>

      <Navbar />

      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        {/* Header */}
        <section className="py-12" style={{ background: 'linear-gradient(135deg, var(--burgundy) 0%, var(--burgundy-dark) 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#donate-section" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 font-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="flex items-center gap-4 mb-2">
              <Heart className="w-8 h-8" style={{ color: 'var(--gold)' }} />
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white">Support Our Mission</h1>
            </div>
            <p className="font-body text-white/80 max-w-xl">
              Help us bring classic literature to every student, everywhere.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Donation Form */}
              <div className="lg:col-span-3">
                <div className="rounded-xl p-6 md:p-8" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <h2 className="font-display text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Make a Donation</h2>

                  {/* Type Toggle */}
                  <div className="flex mb-6 rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                    {['one-time', 'monthly'].map(type => (
                      <button
                        key={type}
                        onClick={() => setDonationType(type)}
                        className="flex-1 py-2.5 font-accent text-sm font-semibold transition-colors capitalize"
                        style={{
                          background: donationType === type ? 'var(--burgundy)' : 'transparent',
                          color: donationType === type ? 'white' : 'var(--text-secondary)'
                        }}
                      >
                        {type.replace('-', ' ')}
                      </button>
                    ))}
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="block font-accent text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Amount</label>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {donationAmounts.map(amount => (
                        <button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className="py-2.5 rounded-lg font-display font-bold text-sm transition-all"
                          style={{
                            background: selectedAmount === amount ? 'var(--burgundy)' : 'var(--bg-tertiary)',
                            color: selectedAmount === amount ? 'white' : 'var(--text-primary)',
                            border: `1px solid ${selectedAmount === amount ? 'var(--burgundy)' : 'var(--border-color)'}`
                          }}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-display" style={{ color: 'var(--text-secondary)' }}>$</span>
                      <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Custom"
                        className="input-classic text-sm"
                        style={{ paddingLeft: '1.75rem' }}
                      />
                    </div>
                    {errors.amount && <p className="text-red-400 text-sm mt-1">{errors.amount}</p>}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-classic text-sm" />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-classic text-sm" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block font-accent text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Payment</label>
                      <div className="flex gap-3">
                        {[{ id: 'card', icon: CreditCard, label: 'Card' }, { id: 'bank', icon: Building, label: 'Bank' }].map(method => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all text-sm"
                            style={{
                              background: paymentMethod === method.id ? 'rgba(114, 47, 55, 0.1)' : 'var(--bg-tertiary)',
                              border: `1px solid ${paymentMethod === method.id ? 'var(--burgundy)' : 'var(--border-color)'}`,
                              color: paymentMethod === method.id ? 'var(--burgundy)' : 'var(--text-secondary)'
                            }}
                          >
                            <method.icon className="w-4 h-4" />
                            {method.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="p-4 rounded-lg space-y-4" style={{ background: 'var(--bg-tertiary)' }}>
                        <div>
                          <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Card Number</label>
                          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" className="input-classic text-sm" />
                          {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Expiry</label>
                            <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" className="input-classic text-sm" />
                          </div>
                          <div>
                            <label className="block font-accent text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>CVV</label>
                            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" className="input-classic text-sm" />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'bank' && (
                      <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                        <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>Bank transfer instructions will be sent to your email.</p>
                      </div>
                    )}

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} className="w-4 h-4 rounded" style={{ accentColor: 'var(--burgundy)' }} />
                      <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>Make my donation anonymous</span>
                    </label>

                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-3">
                      <Heart className="w-5 h-5" />
                      Donate ${finalAmount || 0} {donationType === 'monthly' && '/ month'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Impact Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-xl p-6 text-white sticky top-24" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a3329 100%)' }}>
                  <h3 className="font-display text-xl font-bold mb-6">Your Impact</h3>
                  
                  <div className="space-y-5 mb-6">
                    {impactItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold">${item.amount}</span>
                        </div>
                        <p className="font-body text-sm text-white/80">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-5">
                    <h4 className="font-accent font-semibold mb-3" style={{ color: 'var(--gold)' }}>Why Donate?</h4>
                    <ul className="space-y-2">
                      {['100% goes to programs', 'Tax-deductible', 'Join 5,000+ supporters'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
