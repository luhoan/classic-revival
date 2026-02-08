import '../styles/globals.css'
import { useState, createContext, useEffect, useCallback } from 'react'
import { store } from '../lib/store'

export const AuthContext = createContext(null)
export const ThemeContext = createContext(null)

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize store and restore session
  useEffect(() => {
    store.initialize()
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    
    // Check for saved session
    const savedUser = localStorage.getItem('cr_currentUser')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        setIsLoggedIn(true)
      } catch {}
    }
    
    setIsInitialized(true)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }, [theme])

  const login = useCallback((usernameOrEmail, password) => {
    const authenticatedUser = store.authenticateUser(usernameOrEmail, password)
    if (authenticatedUser) {
      setUser(authenticatedUser)
      setIsLoggedIn(true)
      localStorage.setItem('cr_currentUser', JSON.stringify(authenticatedUser))
      return { success: true, user: authenticatedUser }
    }
    return { success: false, error: 'Invalid username/email or password' }
  }, [])

  const signup = useCallback((userData) => {
    const result = store.createUser(userData)
    if (result.user) {
      setUser(result.user)
      setIsLoggedIn(true)
      localStorage.setItem('cr_currentUser', JSON.stringify(result.user))
      return { success: true, user: result.user }
    }
    return { success: false, error: result.error }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem('cr_currentUser')
  }, [])

  const refreshUser = useCallback(() => {
    if (user) {
      const users = store.getUsers()
      const currentUser = users.find(u => u.id === user.id)
      if (currentUser) {
        const { password: _, ...safeUser } = currentUser
        setUser(safeUser)
        localStorage.setItem('cr_currentUser', JSON.stringify(safeUser))
      }
    }
  }, [user])

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: 'var(--burgundy)' }}></div>
        </div>
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ 
        user, 
        isLoggedIn, 
        isAdmin: user?.isAdmin || false,
        isMasterAdmin: user?.isMasterAdmin || false,
        login, 
        signup,
        logout,
        refreshUser 
      }}>
        <div className="noise-overlay" aria-hidden="true"></div>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}
