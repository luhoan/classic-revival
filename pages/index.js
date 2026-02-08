import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeContext } from './_app'
import { Search, BookOpen, Heart, Users, ArrowRight, Mail, Sparkles, Quote, ChevronDown, Code, MapPin } from 'lucide-react'

const featuredBooks = [
  { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', color: '#722F37' },
  { id: 2, title: 'Moby Dick', author: 'Herman Melville', color: '#1E3A5F' },
  { id: 3, title: 'Great Expectations', author: 'Charles Dickens', color: '#2D4A3E' },
  { id: 4, title: 'Jane Eyre', author: 'Charlotte Brontë', color: '#4A3728' },
]

const teamMembers = [
  { role: 'founder', name: 'Levi Segal', email: 'levi@classicrevival.org', image: '📚' },
  { role: 'vice president', name: 'Hershey', email: 'hershey@classicrevival.org', image: '🎯' },
  { role: 'lead developer', name: 'Luan Hoang', email: 'luan@classicrevival.org', image: '💻' },
  { role: 'lead developer', name: 'Jiewen Huang', email: 'jiewen@classicrevival.org', image: '⚡' },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isVisible, setIsVisible] = useState({})
  const { theme } = useContext(ThemeContext)

  const allBooks = [
    { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 2, title: 'Moby Dick', author: 'Herman Melville' },
    { id: 3, title: 'Great Expectations', author: 'Charles Dickens' },
    { id: 4, title: 'Jane Eyre', author: 'Charlotte Brontë' },
    { id: 5, title: 'Wuthering Heights', author: 'Emily Brontë' },
    { id: 6, title: 'The Odyssey', author: 'Homer' },
    { id: 7, title: 'Don Quixote', author: 'Miguel de Cervantes' },
    { id: 8, title: 'War and Peace', author: 'Leo Tolstoy' },
    { id: 9, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
    { id: 10, title: 'The Divine Comedy', author: 'Dante Alighieri' },
  ]

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.length > 0) {
      const results = allBooks.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(results)
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )
    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>classic revival | bringing the classics back to life</title>
        <meta name="description" content="a 501(c)(3) non-profit organization dedicated to preserving and sharing classic literature." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[90vh] hero-bg relative flex items-center">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(114, 47, 55, 0.08)' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(201, 162, 39, 0.06)' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(114, 47, 55, 0.15)' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--burgundy)' }} />
                <span className="font-accent text-sm" style={{ color: 'var(--burgundy)' }}>501(c)(3) nonprofit</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gold-gradient">classic</span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>revival</span>
              </h1>
              
              <p className="font-body text-xl leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                bringing the classics back to life. we believe classical literature and philosophy are essential to living a thoughtful and fulfilling life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/library" className="btn-primary inline-flex items-center gap-2">
                  explore library
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={() => document.getElementById('mission').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary inline-flex items-center gap-2">
                  our mission
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="rounded-2xl shadow-2xl p-8 relative" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'var(--gold)' }}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                
                <h2 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>search our collection</h2>
                <p className="font-body mb-6" style={{ color: 'var(--text-secondary)' }}>find your next classic read</p>
                
                <div className="relative">
                  <div className="search-sleek flex items-center px-4">
                    <Search className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearch}
                      placeholder="search by title or author..."
                      className="flex-1 bg-transparent border-none outline-none py-3 px-3 font-body"
                      style={{ color: 'var(--text-primary)' }}
                      onFocus={() => searchQuery && setShowResults(true)}
                      onBlur={() => setTimeout(() => setShowResults(false), 200)}
                    />
                  </div>
                  
                  {showResults && (
                    <div 
                      className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-xl overflow-hidden z-20"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                    >
                      {searchResults.length > 0 ? (
                        <ul className="max-h-64 overflow-y-auto">
                          {searchResults.map(book => (
                            <li key={book.id}>
                              <Link 
                                href={`/book/${book.id}`}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-black/5 transition-colors"
                              >
                                <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--burgundy)' }} />
                                <div>
                                  <p className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>{book.title}</p>
                                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{book.author}</p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="px-4 py-3 text-sm" style={{ color: 'var(--text-secondary)' }}>no results found</p>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <p className="font-accent text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>popular classics</p>
                  <div className="flex gap-2 flex-wrap">
                    {featuredBooks.slice(0, 3).map(book => (
                      <Link 
                        key={book.id} 
                        href={`/book/${book.id}`}
                        className="px-3 py-1.5 rounded-full text-sm font-accent transition-all hover:opacity-80"
                        style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
                      >
                        {book.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" data-animate className={`py-24 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block font-accent text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--burgundy)' }}>our mission</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                  making classic literature accessible to everyone
                </h2>
                <p className="font-body text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  classic revival believes that there is an access and exposure problem when it comes to classic literature. we provide free resources, partner with schools, and build tools to help students discover the timeless wisdom in these works.
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  everyone involved in classic revival has experienced the impact of classical literature firsthand and wants to share that experience with others.
                </p>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl p-10 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--burgundy) 0%, var(--burgundy-dark) 100%)' }}>
                  <Quote className="absolute top-6 left-6 w-16 h-16 text-white/10" />
                  <div className="relative z-10">
                    <p className="font-display text-2xl italic leading-relaxed mb-6">
                      "everyone involved in classic revival has experienced the impact of classical literature firsthand and wants to share that experience with others."
                    </p>
                    <p className="font-accent" style={{ color: 'var(--gold)' }}>— classic revival</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Apply Section */}
        <section id="apply-section" data-animate className={`py-24 transition-all duration-1000 ${isVisible['apply-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-accent text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--burgundy)' }}>join us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>become part of classic revival</h2>
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                we're looking for passionate individuals who share our love for classic literature.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: BookOpen, title: 'content contributors', desc: 'create lectures and reading guides' },
                  { icon: MapPin, title: 'local chapters', desc: 'start a chapter at your school' },
                  { icon: Code, title: 'developers', desc: 'help build features and tools' }
                ].map((item, i) => (
                  <div key={i} className="card-classic text-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(114, 47, 55, 0.15)' }}>
                      <item.icon className="w-7 h-7" style={{ color: 'var(--burgundy)' }} />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/apply" className="btn-primary inline-flex items-center gap-2">
                apply now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Donate Section */}
        <section id="donate-section" data-animate className={`py-24 transition-all duration-1000 ${isVisible['donate-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl p-10 text-white" style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a3329 100%)' }}>
                  <h3 className="font-display text-2xl font-bold mb-8">your impact</h3>
                  <div className="space-y-6">
                    {[
                      { amount: '$25', desc: 'provides books for one student' },
                      { amount: '$50', desc: 'creates a reading guide' },
                      { amount: '$100', desc: 'partners with a school library' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-display text-2xl font-bold">{item.amount}</span>
                        </div>
                        <p className="font-body text-white/80">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                  <span className="font-accent text-sm tracking-widest uppercase" style={{ color: 'var(--burgundy)' }}>support us</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                  help bring classics to every student
                </h2>
                <p className="font-body text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  your donation helps us provide physical copies of books, digital resources, and community forums—all completely free for students.
                </p>
                <Link href="/donate" className="btn-primary inline-flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  donate now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Sponsors Section */}
        <section id="sponsors" data-animate className={`py-16 transition-all duration-1000 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block font-accent text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>our sponsors</span>
            <h2 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>thank you to those who make this possible</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <a href="https://hackclub.com/hcb" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(236, 55, 80, 0.1)' }}>
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>HCB</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>fiscal sponsor</p>
                  </div>
                </div>
              </a>
              
              <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(236, 55, 80, 0.1)' }}>
                    <span className="text-2xl">🔴</span>
                  </div>
                  <div className="text-left">
                    <p className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>Hack Club</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>community partner</p>
                  </div>
                </div>
              </a>
            </div>
            
            <p className="mt-8 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
              classic revival is a 501(c)(3) nonprofit organization. all donations are tax-deductible.
            </p>
          </div>
        </section>

        <div className="section-divider max-w-4xl mx-auto" />

        {/* Contact Section */}
        <section id="contact" data-animate className={`py-24 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block font-accent text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--burgundy)' }}>get in touch</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>our team</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="card-classic text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl" style={{ background: 'rgba(114, 47, 55, 0.1)' }}>
                    {member.image}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{member.name}</h3>
                  <p className="font-accent text-sm mb-3" style={{ color: 'var(--burgundy)' }}>{member.role}</p>
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>find us online</p>
              <div className="flex justify-center items-center gap-6">
                <a href="#" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>instagram</a>
                <span style={{ color: 'var(--border-color)' }}>·</span>
                <a href="#" className="font-accent text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>linkedin</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
