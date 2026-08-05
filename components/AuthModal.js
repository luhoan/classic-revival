import { useState, useContext, useEffect } from 'react'
import { X, Eye, EyeOff, Mail, Lock, User, AtSign } from 'lucide-react'
import { AuthContext } from '../pages/_app'

export default function AuthModal({ isOpen, onClose, mode, setMode }) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [generalError, setGeneralError] = useState('')
  const { login, signup } = useContext(AuthContext)

  useEffect(() => {
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
    setGeneralError('')
    setShowPassword(false)
  }, [mode, isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    setGeneralError('')
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (mode === 'signup') {
      if (!formData.name.trim()) newErrors.name = 'name is required'
      if (!formData.username.trim()) {
        newErrors.username = 'username is required'
      } else if (formData.username.length < 3) {
        newErrors.username = 'username must be at least 3 characters'
      } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
        newErrors.username = 'username can only contain letters, numbers, and underscores'
      }
      if (!formData.email.trim()) {
        newErrors.email = 'email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'please enter a valid email'
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'passwords do not match'
      }
    } else {
      if (!formData.username.trim()) {
        newErrors.username = 'username or email is required'
      }
    }
    
    if (!formData.password) {
      newErrors.password = 'password is required'
    } else if (mode === 'signup' && formData.password.length < 8) {
      newErrors.password = 'password must be at least 8 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGeneralError('')
    
    if (!validateForm()) return

    if (mode === 'login') {
      const result = login(formData.username, formData.password)
      if (result.success) {
        onClose()
      } else {
        setGeneralError(result.error)
      }
    } else {
      const result = signup({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
      if (result.success) {
        onClose()
      } else {
        setGeneralError(result.error)
      }
    }
  }

  const handleModeSwitch = () => {
    setMode(mode === 'login' ? 'signup' : 'login')
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md rounded-[3px] shadow-2xl overflow-hidden animate-fadeInUp"
        style={{ background: 'var(--bg-secondary)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-burgundy to-burgundy-dark p-6 text-white" style={{ background: 'linear-gradient(135deg, var(--burgundy) 0%, var(--burgundy-dark) 100%)' }}>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-[2px] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-display text-2xl font-bold">
            {mode === 'login' ? 'welcome back' : 'join classic revival'}
          </h2>
          <p className="font-accent text-white/80 mt-1">
            {mode === 'login' 
              ? 'sign in to continue your literary journey' 
              : 'create an account to access our library'
            }
          </p>
        </div>

        {/* Error Banner */}
        {generalError && (
          <div className="mx-6 mt-4 p-3 rounded-[2px] bg-red-500/10 border border-red-500/30">
            <p className="text-red-400 text-sm text-center">{generalError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {mode === 'signup' && (
            <div>
              <label className="block font-accent text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="enter your name"
                  className="input-classic"
                  style={{ paddingLeft: '2.75rem' }}
                  autoComplete="off"
                />
              </div>
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="block font-accent text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              {mode === 'login' ? 'username or email' : 'username'}
            </label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder={mode === 'login' ? 'username or email' : 'choose a username'}
                className="input-classic"
                style={{ paddingLeft: '2.75rem' }}
                autoComplete="off"
              />
            </div>
            {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block font-accent text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input-classic"
                  style={{ paddingLeft: '2.75rem' }}
                  autoComplete="off"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          )}

          <div>
            <label className="block font-accent text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-classic"
                style={{ paddingLeft: '2.75rem', paddingRight: '2.75rem' }}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-secondary)' }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block font-accent text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-classic"
                  style={{ paddingLeft: '2.75rem' }}
                  autoComplete="new-password"
                />
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          )}

          <button type="submit" className="btn-primary w-full mt-6">
            {mode === 'login' ? 'sign in' : 'create account'}
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6 text-center">
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            {mode === 'login' ? "don't have an account? " : "already have an account? "}
            <button 
              onClick={handleModeSwitch}
              className="font-semibold hover:underline"
              style={{ color: 'var(--burgundy)' }}
            >
              {mode === 'login' ? 'sign up' : 'sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
