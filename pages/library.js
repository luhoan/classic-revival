import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeContext, AuthContext } from './_app'
import { store, getBookDesign } from '../lib/store'
import { Search, BookOpen, X, Star, Download, MessageCircle, FileText, ChevronRight, Clock, Calendar } from 'lucide-react'

const genres = ['All', 'Fiction', 'Philosophy', 'Drama', 'Poetry', 'History', 'Biography', 'Epic', 'Religion', 'Politics', 'Science', 'Literature', 'Psychology', 'Romance', 'Classic']

const darkBookColors = [
  '#2a1f1a', '#1a1a2e', '#1e3d2f', '#2d1b2d', '#1a2633',
  '#3d2b1f', '#1f2937', '#2c1810', '#1a2d1a', '#2e1a1a',
  '#1f1a2e', '#2a2520', '#1a2a2a', '#2d2418', '#1e1e28'
]

function Book({ book, isHovered, onHover, onLeave, onClick, hoveredBookInShelf }) {
  const design = getBookDesign(book.id, book.pages)
  const bookColor = darkBookColors[(book.id - 1) % darkBookColors.length]
  const baseWidth = Math.max(28, Math.min(50, Math.floor((book.pages || 400) / 20)))
  const height = design.height || 220
  const shouldOffset = hoveredBookInShelf !== null && hoveredBookInShelf !== book.id
  
  return (
    <div
      className="relative flex-shrink-0"
      style={{ 
        transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: shouldOffset ? `translateX(${book.id < hoveredBookInShelf ? -15 : 15}px)` : 'translateX(0)',
        zIndex: isHovered ? 100 : 1
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isHovered && (
        <div 
          className="absolute left-1/2 z-[110] book-preview-popup rounded-xl overflow-hidden animate-previewSlideIn"
          style={{ bottom: `${height + 50}px`, width: '240px', transform: 'translateX(-50%)' }}
        >
          <div className="p-4 relative" style={{ background: bookColor }}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-24 rounded-sm flex-shrink-0 leather-texture" style={{ background: `linear-gradient(135deg, ${bookColor} 0%, rgba(0,0,0,0.3) 100%)`, boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.4)' }} />
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-white text-sm leading-tight mb-1 truncate">{book.title}</h3>
                <p className="text-white/70 text-xs mb-2">{book.author}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" style={{ color: 'var(--gold)' }} />
                    <span className="text-xs text-white/80">{store.getAverageRating(book.id) || '—'}</span>
                  </div>
                  <span className="text-white/40">·</span>
                  <span className="text-xs text-white/60">{book.pages || 400}p</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <Calendar className="w-3 h-3" />
              <span>{book.year < 0 ? `${Math.abs(book.year)} BCE` : book.year}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px]" style={{ background: 'rgba(114, 47, 55, 0.15)', color: 'var(--burgundy)' }}>{book.genre}</span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onClick(); }} className="w-full py-2 rounded-lg text-xs font-accent font-semibold transition-all hover:opacity-90" style={{ background: 'var(--burgundy)', color: 'white' }}>view details</button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45" style={{ background: 'var(--bg-secondary)', borderRight: '1px solid rgba(201, 162, 39, 0.2)', borderBottom: '1px solid rgba(201, 162, 39, 0.2)' }} />
        </div>
      )}
      
      <button
        onClick={onClick}
        className="relative cursor-pointer"
        style={{ 
          width: `${baseWidth}px`, height: `${height}px`,
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: isHovered ? 'translateY(-35px) rotateY(-20deg) scale(1.05)' : 'translateY(0) rotateY(0) scale(1)',
          transformStyle: 'preserve-3d', perspective: '800px'
        }}
      >
        <div 
          className="absolute inset-0 rounded-sm overflow-hidden leather-texture"
          style={{ 
            background: `linear-gradient(135deg, ${bookColor} 0%, rgba(255,255,255,0.05) 30%, ${bookColor} 70%, rgba(0,0,0,0.3) 100%)`,
            boxShadow: isHovered ? 'inset -6px 0 15px rgba(0,0,0,0.5), 8px 12px 35px rgba(0,0,0,0.6)' : 'inset -4px 0 12px rgba(0,0,0,0.4), 2px 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.1) 100%)' }} />
          {design.design !== 'plain' && (
            <>
              <div className="absolute top-4 left-1 right-1 h-[1px]" style={{ background: design.bandColor || 'rgba(201, 162, 39, 0.3)' }} />
              <div className="absolute bottom-4 left-1 right-1 h-[1px]" style={{ background: design.bandColor || 'rgba(201, 162, 39, 0.3)' }} />
            </>
          )}
          <div className="absolute inset-0 flex items-center justify-center px-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            <span className="font-accent text-white/90 font-semibold text-center leading-tight truncate" style={{ fontSize: baseWidth < 35 ? '8px' : '9px', textShadow: '0 1px 3px rgba(0,0,0,0.8)', maxHeight: `${height - 40}px` }}>
              {book.title.length > 35 ? book.title.substring(0, 33) + '...' : book.title}
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}

function BookPreviewModal({ book, onClose }) {
  const [activeTab, setActiveTab] = useState('overview')
  const { user, isLoggedIn } = useContext(AuthContext)
  const [userRating, setUserRating] = useState(null)
  const [showRatingSlider, setShowRatingSlider] = useState(false)
  const [avgRating, setAvgRating] = useState(0)
  
  useEffect(() => {
    if (book) {
      setAvgRating(store.getAverageRating(book.id))
      if (user) setUserRating(store.getUserRating(book.id, user.id))
    }
  }, [book, user])

  if (!book) return null

  const handleRate = (rating) => {
    if (!isLoggedIn) return
    const newAvg = store.addRating(book.id, user.id, rating)
    setUserRating(rating)
    setAvgRating(newAvg)
    setTimeout(() => setShowRatingSlider(false), 300)
  }

  const bookColor = darkBookColors[(book.id - 1) % darkBookColors.length]
  const tabs = [
    { id: 'overview', label: 'overview', icon: BookOpen },
    { id: 'lectures', label: 'lectures', icon: FileText },
    { id: 'discussions', label: 'discuss', icon: MessageCircle },
    { id: 'download', label: 'download', icon: Download },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop" onClick={onClose}>
      <div className="w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-xl animate-fadeInUp" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }} onClick={e => e.stopPropagation()}>
        <div className="relative p-6" style={{ background: bookColor }}>
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"><X className="w-5 h-5 text-white" /></button>
          <div className="flex gap-5">
            <div className="w-12 h-40 rounded-sm flex-shrink-0 leather-texture" style={{ background: `linear-gradient(135deg, ${bookColor} 0%, rgba(255,255,255,0.05) 50%, ${bookColor} 100%)`, boxShadow: 'inset -4px 0 10px rgba(0,0,0,0.4), 4px 4px 15px rgba(0,0,0,0.4)' }} />
            <div className="text-white flex-1">
              <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-xs font-accent mb-2">{book.genre}</span>
              <h2 className="font-display text-2xl font-bold mb-1">{book.title}</h2>
              <p className="font-accent text-white/80 mb-3">by {book.author}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-current" style={{ color: 'var(--gold)' }} /><span className="font-bold">{avgRating || '—'}</span></div>
                {isLoggedIn && (
                  <div className="relative">
                    <button onClick={() => setShowRatingSlider(!showRatingSlider)} className="text-xs px-2 py-1 bg-white/20 rounded hover:bg-white/30 flex items-center gap-1">
                      {userRating ? `your: ${userRating}` : 'rate'}<ChevronRight className={`w-3 h-3 transition-transform ${showRatingSlider ? 'rotate-180' : ''}`} />
                    </button>
                    {showRatingSlider && (
                      <div className="absolute left-full top-0 ml-2 flex items-center gap-1 p-2 rounded-lg animate-fadeIn" style={{ background: 'rgba(0,0,0,0.8)' }}>
                        {[1,2,3,4,5].map(star => (<button key={star} onClick={() => handleRate(star)} className="p-1 hover:scale-110 transition-transform"><Star className={`w-5 h-5 ${star <= (userRating || 0) ? 'fill-current' : ''}`} style={{ color: 'var(--gold)' }} /></button>))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b overflow-x-auto" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
          {tabs.map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`book-tab flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id ? 'active' : ''}`}><tab.icon className="w-4 h-4" />{tab.label}</button>))}
        </div>
        <div className="p-6 overflow-y-auto" style={{ maxHeight: '280px' }}>
          {activeTab === 'overview' && (<p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>a classic work of literature published in {book.year < 0 ? `${Math.abs(book.year)} BCE` : book.year}. this {book.pages || 400}-page masterpiece continues to captivate readers.</p>)}
          {activeTab === 'lectures' && (<div className="space-y-3">{['introduction & context', 'major themes', 'character analysis', 'literary techniques', 'legacy'].map((l, i) => (<div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}><div className="flex items-center gap-3"><span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(114, 47, 55, 0.15)', color: 'var(--burgundy)' }}>{i + 1}</span><span className="font-accent text-sm" style={{ color: 'var(--text-primary)' }}>{l}</span></div><ChevronRight className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} /></div>))}</div>)}
          {activeTab === 'discussions' && (<div className="text-center py-6"><MessageCircle className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--text-secondary)', opacity: 0.4 }} /><p className="font-body text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>join the discussion</p><Link href={`/book/${book.id}?tab=discussions`} className="inline-block px-4 py-2 rounded-lg font-accent text-sm" style={{ background: 'rgba(114, 47, 55, 0.15)', color: 'var(--burgundy)' }}>view discussions</Link></div>)}
          {activeTab === 'download' && (<div className="space-y-3">{['PDF', 'EPUB', 'Audio'].map((f, i) => (<button key={i} className="w-full flex items-center justify-between p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}><div className="flex items-center gap-3"><Download className="w-5 h-5" style={{ color: 'var(--burgundy)' }} /><span className="font-accent text-sm" style={{ color: 'var(--text-primary)' }}>{f}</span></div><span className="text-xs" style={{ color: 'var(--text-secondary)' }}>free</span></button>))}</div>)}
        </div>
        <div className="p-4 border-t flex justify-end gap-3" style={{ borderColor: 'var(--border-color)' }}>
          <button onClick={onClose} className="px-4 py-2 rounded-lg font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>close</button>
          <Link href={`/book/${book.id}`} className="btn-primary text-sm py-2">view full page</Link>
        </div>
      </div>
    </div>
  )
}

export default function Library() {
  const router = useRouter()
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedBook, setSelectedBook] = useState(null)
  const [hoveredBook, setHoveredBook] = useState(null)
  const [hoveredShelf, setHoveredShelf] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load books from library_master.json
    const loadBooks = async () => {
      setLoading(true)
      try {
        const libraryBooks = await store.initializeBooksFromLibrary()
        setBooks(libraryBooks)
      } catch (error) {
        console.error('Failed to load books:', error)
        // Fallback to placeholder books
        setBooks(store.getBooks())
      } finally {
        setLoading(false)
      }
    }

    loadBooks()
    if (router.query.search) setSearchQuery(router.query.search)
  }, [router.query])

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const shelves = []
  for (let i = 0; i < filteredBooks.length; i += 10) {
    shelves.push(filteredBooks.slice(i, i + 10))
  }

  return (
    <>
      <Head><title>library | classic revival</title></Head>
      <Navbar />
      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <section className="py-10" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <h1 className="font-display text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>the library</h1>
                <p className="font-body" style={{ color: 'var(--text-secondary)' }}>{filteredBooks.length} classic {filteredBooks.length === 1 ? 'work' : 'works'}</p>
              </div>
              <div className="search-sleek flex items-center px-4 w-full md:w-64">
                <Search className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="search..." className="flex-1 bg-transparent border-none outline-none py-2.5 px-3 font-body text-sm" style={{ color: 'var(--text-primary)' }} />
                {searchQuery && (<button onClick={() => setSearchQuery('')} className="p-1 hover:opacity-70"><X className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} /></button>)}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {genres.map(genre => (<button key={genre} onClick={() => setSelectedGenre(genre)} className="px-3 py-1.5 rounded-full text-sm font-accent transition-all" style={{ background: selectedGenre === genre ? 'var(--burgundy)' : 'var(--bg-tertiary)', color: selectedGenre === genre ? 'white' : 'var(--text-secondary)', border: `1px solid ${selectedGenre === genre ? 'var(--burgundy)' : 'var(--border-color)'}` }}>{genre}</button>))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bookshelf-3d">
            {loading ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 mx-auto mb-4 animate-pulse" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
                <p className="font-display text-2xl" style={{ color: 'var(--text-secondary)' }}>Loading library...</p>
              </div>
            ) : shelves.length > 0 ? (
              <div className="space-y-8">
                {shelves.map((shelf, shelfIndex) => (
                  <div key={shelfIndex} className="shelf-container">
                    <div className="wood-shelf rounded-lg overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 -15px 40px rgba(0,0,0,0.4)' }}>
                      <div className="absolute top-0 left-0 right-0 h-3" style={{ background: 'linear-gradient(180deg, #7a6352 0%, #5c4033 100%)' }} />
                      <div className="px-6 pt-8 pb-4">
                        <div className="flex justify-center items-end gap-[2px] flex-wrap" style={{ minHeight: '280px' }}>
                          {shelf.map((book) => (
                            <Book
                              key={book.id}
                              book={book}
                              isHovered={hoveredBook === book.id && hoveredShelf === shelfIndex}
                              hoveredBookInShelf={hoveredShelf === shelfIndex ? hoveredBook : null}
                              onHover={() => { setHoveredBook(book.id); setHoveredShelf(shelfIndex); }}
                              onLeave={() => { setHoveredBook(null); setHoveredShelf(null); }}
                              onClick={() => setSelectedBook(book)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="shelf-lip h-8 rounded-b-lg" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
                <p className="font-display text-2xl" style={{ color: 'var(--text-secondary)' }}>no books found</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <BookPreviewModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </>
  )
}
