import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Classic Revival" className="h-8 w-auto opacity-80" />
            <span className="font-display text-lg font-bold" style={{ color: 'var(--burgundy)' }}>classic revival</span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <Link href="/library" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
              library
            </Link>
            <span style={{ color: 'var(--border-color)' }}>·</span>
            <Link href="/apply" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
              apply
            </Link>
            <span style={{ color: 'var(--border-color)' }}>·</span>
            <Link href="/donate" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
              donate
            </Link>
            <span style={{ color: 'var(--border-color)' }}>·</span>
            <Link href="/#contact" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
              contact
            </Link>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4 mb-6">
            <a href="#" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
              instagram
            </a>
            <span style={{ color: 'var(--border-color)' }}>·</span>
            <a href="#" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
              linkedin
            </a>
          </div>

          {/* 501c3 badge */}
          <p className="font-body text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
            501(c)(3) nonprofit organization
          </p>

          {/* Copyright */}
          <p className="font-body text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
            made with <Heart className="w-3 h-3" style={{ color: 'var(--burgundy)' }} /> by the classic revival team
          </p>
        </div>
      </div>
    </footer>
  )
}
