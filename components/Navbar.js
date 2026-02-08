import { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext, ThemeContext } from '../pages/_app'
import { User, BookOpen, Heart, FileText, Mail, Home, Sun, Moon, Shield, ClipboardList, Users, LogOut } from 'lucide-react'
import AuthModal from './AuthModal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, isLoggedIn, isAdmin, logout } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const router = useRouter()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setShowUserMenu(!showUserMenu)
    } else {
      setAuthMode('login')
      setShowAuthModal(true)
    }
  }

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
    router.push('/')
  }

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    if (router.pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors"
        style={{ 
          background: theme === 'dark' ? 'rgba(18, 18, 18, 0.9)' : 'rgba(245, 240, 230, 0.9)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Menu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all ${isMenuOpen ? 'hamburger-open' : ''}`}
              style={{ background: isMenuOpen ? 'var(--bg-tertiary)' : 'transparent' }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="hamburger-line block w-full h-0.5" style={{ background: 'var(--text-primary)' }}></span>
                <span className="hamburger-line block w-full h-0.5" style={{ background: 'var(--text-primary)' }}></span>
                <span className="hamburger-line block w-full h-0.5" style={{ background: 'var(--text-primary)' }}></span>
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="Classic Revival" className="h-10 w-auto" />
              <span className="font-display text-xl font-bold hidden sm:block" style={{ color: 'var(--burgundy)' }}>
                Classic Revival
              </span>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all hover:opacity-80"
                style={{ background: 'var(--bg-tertiary)' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                ) : (
                  <Moon className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                )}
              </button>

              <Link 
                href="/apply" 
                className="hidden sm:block px-4 py-2 text-sm font-accent font-semibold rounded transition-all hover:opacity-90"
                style={{ color: 'var(--burgundy)', border: '1px solid var(--burgundy)' }}
              >
                Apply
              </Link>

              {/* Account */}
              <div className="relative ml-2">
                <button 
                  onClick={handleAuthClick}
                  className="flex items-center gap-2 p-2 rounded-lg transition-all"
                  aria-label={isLoggedIn ? "Account" : "Login"}
                >
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: isAdmin ? 'rgba(201, 162, 39, 0.2)' : 'rgba(114, 47, 55, 0.15)' }}
                  >
                    {isAdmin ? (
                      <Shield className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                    ) : (
                      <User className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                    )}
                  </div>
                  {isLoggedIn && (
                    <span className="hidden sm:block text-sm font-accent" style={{ color: 'var(--text-secondary)' }}>
                      {user?.name?.split(' ')[0] || user?.username}
                    </span>
                  )}
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && isLoggedIn && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                    <div 
                      className="absolute right-0 top-full mt-2 w-48 rounded-lg shadow-xl z-50 py-2"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                    >
                      <div className="px-4 py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
                        <p className="font-accent font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                          {user?.name}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          @{user?.username}
                        </p>
                        {isAdmin && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-accent" style={{ background: 'rgba(201, 162, 39, 0.2)', color: 'var(--gold)' }}>
                            Admin
                          </span>
                        )}
                      </div>
                      
                      {isAdmin && (
                        <>
                          <Link
                            href="/admin"
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-accent transition-colors hover:bg-black/5"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <Shield className="w-4 h-4" />
                            Admin Panel
                          </Link>
                        </>
                      )}
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm font-accent transition-colors hover:bg-black/5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Slide-out Menu */}
        <div 
          className={`fixed top-16 left-0 w-72 h-[calc(100vh-4rem)] border-r transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } dropdown-shadow overflow-y-auto`}
          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
        >
          <div className="p-6">
            <h3 className="font-display text-lg mb-6 pb-3 border-b" style={{ color: 'var(--burgundy)', borderColor: 'var(--border-color)' }}>
              Navigation
            </h3>
            <ul className="space-y-1">
              <li>
                <Link 
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Home className="w-5 h-5" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/library"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <BookOpen className="w-5 h-5" />
                  Library
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent text-left"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <FileText className="w-5 h-5" />
                  Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('apply-section')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent text-left"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <FileText className="w-5 h-5" />
                  Apply
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('donate-section')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent text-left"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Heart className="w-5 h-5" />
                  Donate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent text-left"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </button>
              </li>

              {/* Admin-only items */}
              {isAdmin && (
                <>
                  <li className="pt-4 mt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="px-4 text-xs font-accent uppercase tracking-wider" style={{ color: 'var(--gold)' }}>
                      Admin
                    </span>
                  </li>
                  <li>
                    <Link 
                      href="/admin"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent"
                      style={{ color: 'var(--gold)' }}
                    >
                      <Shield className="w-5 h-5" />
                      Admin Panel
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/admin/applications"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent"
                      style={{ color: 'var(--gold)' }}
                    >
                      <ClipboardList className="w-5 h-5" />
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/admin/users"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-accent"
                      style={{ color: 'var(--gold)' }}
                    >
                      <Users className="w-5 h-5" />
                      Manage Users
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-black/30 z-[-1]" onClick={() => setIsMenuOpen(false)} />
        )}
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </>
  )
}
