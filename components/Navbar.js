import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext, ThemeContext } from '../pages/_app'
import { User, Sun, Moon, Shield, ClipboardList, Users, LogOut, Menu } from 'lucide-react'
import AuthModal from './AuthModal'
import { site } from '../lib/content/site'
import { campaigns } from '../lib/content/campaigns'
import { StatusBadge } from './ui'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, isLoggedIn, isAdmin, logout } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const router = useRouter()

  // Close the mobile sheet on navigation.
  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false)
    router.events.on('routeChangeStart', closeMenu)
    return () => router.events.off('routeChangeStart', closeMenu)
  }, [router.events])

  const isCurrent = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname === href || router.pathname.startsWith(`${href}/`)

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

  const ourWork = site.nav.find((item) => item.href === '/our-work')
  const restNav = site.nav.filter((item) => item.href !== '/our-work')

  // Site-wide announcement strip; hidden on the page it points to.
  const showAnnouncement = router.pathname !== '/essay-competition'

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      <nav className="site-header fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
        {showAnnouncement && (
          <Link href="/essay-competition" className="block" style={{ background: 'var(--burgundy-dark)' }}>
            <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center gap-2 text-xs sm:text-sm text-white">
              <span className="font-semibold uppercase tracking-[0.08em] shrink-0" style={{ color: 'var(--gold-light)' }}>
                Now open
              </span>
              <span aria-hidden="true" style={{ color: 'var(--gold-light)' }}>·</span>
              <span className="truncate">
                The Essay Competition
                <span className="hidden md:inline"> — win prize money &amp; free books</span>
              </span>
              <span className="font-semibold underline underline-offset-2 shrink-0">Sign up →</span>
            </p>
          </Link>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="" className="h-9 w-auto" />
              <span className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Classic Revival
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {ourWork && (
                <NavigationMenu delayDuration={100}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className="nav-link h-auto rounded-none border-b-2 bg-transparent px-0.5 py-1.5 data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent"
                        style={{
                          borderBottomColor: isCurrent(ourWork.href) ? 'var(--burgundy)' : 'transparent',
                          color: isCurrent(ourWork.href) ? 'var(--burgundy)' : undefined,
                        }}
                      >
                        {ourWork.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[380px] p-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/our-work"
                              className="block px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-black/5 rounded-[2px]"
                              style={{ color: 'var(--text-primary)' }}
                            >
                              Campaign overview
                              <span className="block text-xs font-normal mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                Three campaigns, one circulation of books
                              </span>
                            </Link>
                          </NavigationMenuLink>
                          <hr className="rule my-2" />
                          {campaigns.map((c) => (
                            <NavigationMenuLink asChild key={c.slug}>
                              <Link
                                href={`/our-work/${c.slug}`}
                                className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-black/5 rounded-[2px]"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                <span className="font-medium">{c.shortName}</span>
                                <StatusBadge campaign={c} />
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
              {restNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right-side controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-[2px] transition-colors hover:opacity-80"
                style={{ background: 'var(--bg-tertiary)' }}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" style={{ color: 'var(--gold-light)' }} />
                ) : (
                  <Moon className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                )}
              </button>

              {/* Account */}
              <div className="relative">
                <button
                  onClick={handleAuthClick}
                  className="flex items-center gap-2 p-1.5 rounded-[2px] transition-colors"
                  aria-label={isLoggedIn ? 'Account menu' : 'Log in'}
                  aria-expanded={isLoggedIn ? showUserMenu : undefined}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: isAdmin ? 'rgba(198, 154, 98, 0.18)' : 'rgba(74, 108, 148, 0.15)' }}
                  >
                    {isAdmin ? (
                      <Shield className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                    ) : (
                      <User className="w-4 h-4" style={{ color: 'var(--burgundy)' }} />
                    )}
                  </span>
                  {isLoggedIn && (
                    <span className="hidden sm:block text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {user?.name?.split(' ')[0] || user?.username}
                    </span>
                  )}
                </button>

                {showUserMenu && isLoggedIn && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                    <div
                      className="absolute right-0 top-full mt-2 w-52 rounded-[3px] dropdown-shadow z-50 py-2"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                    >
                      <div className="px-4 py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
                        <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{user?.name}</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>@{user?.username}</p>
                        {isAdmin && <span className="badge badge-gold mt-1.5">Admin</span>}
                      </div>

                      {isAdmin && (
                        <>
                          <Link
                            href="/admin"
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-black/5"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <Shield className="w-4 h-4" /> Admin Panel
                          </Link>
                          <Link
                            href="/admin/applications"
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-black/5"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <ClipboardList className="w-4 h-4" /> Applications
                          </Link>
                          <Link
                            href="/admin/users"
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-black/5"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <Users className="w-4 h-4" /> Manage Users
                          </Link>
                        </>
                      )}

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-black/5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>

              <Link href="/donate" className="btn-primary !hidden sm:!inline-flex !py-2 !px-4 text-sm">
                Donate
              </Link>

              {/* Mobile menu (sheet) */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="lg:hidden p-2 rounded-[2px] transition-colors"
                    style={{ background: isMenuOpen ? 'var(--bg-tertiary)' : 'transparent' }}
                    aria-label="Open menu"
                  >
                    <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] border-l p-0"
                  style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                >
                  <SheetHeader className="border-b px-5 py-4 text-left" style={{ borderColor: 'var(--border-color)' }}>
                    <SheetTitle className="flex items-center gap-2.5 font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      <img src="/logo.png" alt="" className="h-7 w-auto" />
                      Classic Revival
                    </SheetTitle>
                  </SheetHeader>
                  <nav aria-label="Mobile navigation" className="px-3 py-4">
                    <ul className="space-y-1">
                      {ourWork && (
                        <li>
                          <Link
                            href="/our-work"
                            className="block px-3 py-2.5 rounded-[2px] font-medium text-sm transition-colors"
                            style={{
                              color: router.pathname === '/our-work' ? 'var(--burgundy)' : 'var(--text-secondary)',
                              background: router.pathname === '/our-work' ? 'rgba(74, 108, 148, 0.1)' : 'transparent',
                            }}
                            aria-current={router.pathname === '/our-work' ? 'page' : undefined}
                          >
                            {ourWork.label}
                          </Link>
                          <ul className="mt-1 space-y-1 border-l ml-4 pl-2" style={{ borderColor: 'var(--border-color)' }}>
                            {campaigns.map((c) => (
                              <li key={c.slug}>
                                <Link
                                  href={`/our-work/${c.slug}`}
                                  className="block px-3 py-2 rounded-[2px] text-sm transition-colors"
                                  style={{
                                    color: isCurrent(`/our-work/${c.slug}`) ? 'var(--burgundy)' : 'var(--text-secondary)',
                                    background: isCurrent(`/our-work/${c.slug}`) ? 'rgba(74, 108, 148, 0.1)' : 'transparent',
                                  }}
                                  aria-current={isCurrent(`/our-work/${c.slug}`) ? 'page' : undefined}
                                >
                                  {c.shortName}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                      {restNav.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2.5 rounded-[2px] font-medium text-sm transition-colors"
                            style={{
                              color: isCurrent(item.href) ? 'var(--burgundy)' : 'var(--text-secondary)',
                              background: isCurrent(item.href) ? 'rgba(74, 108, 148, 0.1)' : 'transparent',
                            }}
                            aria-current={isCurrent(item.href) ? 'page' : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li className="pt-3 px-3">
                        <Link href="/donate" className="btn-primary w-full">
                          Donate
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* In-flow spacer matching the announcement strip's height, so page
          content (offset only for the h-16 nav via pt-16) isn't covered. */}
      {showAnnouncement && <div aria-hidden="true" className="h-9" />}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </>
  )
}
