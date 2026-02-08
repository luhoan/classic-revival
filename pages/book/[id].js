import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ThemeContext, AuthContext } from '../_app'
import { store } from '../../lib/store'
import { ArrowLeft, BookOpen, Clock, Calendar, FileText, Download, Star, MessageCircle, ChevronRight, ChevronLeft, Send, Trash2, User } from 'lucide-react'

const defaultLectures = [
  { id: 1, title: 'Introduction & Historical Context', duration: '45 min', content: 'An overview of the author\'s life and the historical period.' },
  { id: 2, title: 'Major Themes and Motifs', duration: '60 min', content: 'Exploring the central themes of the narrative.' },
  { id: 3, title: 'Character Analysis', duration: '55 min', content: 'A deep examination of the main characters.' },
  { id: 4, title: 'Literary Techniques', duration: '50 min', content: 'Understanding the author\'s use of language.' },
  { id: 5, title: 'Critical Reception & Legacy', duration: '40 min', content: 'How this work was received and its influence.' },
]

export default function BookPage() {
  const router = useRouter()
  const { user, isLoggedIn, isAdmin } = useContext(AuthContext)
  const { id, tab } = router.query
  
  const [book, setBook] = useState(null)
  const [activeTab, setActiveTab] = useState('lectures')
  const [discussions, setDiscussions] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [replyTo, setReplyTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [avgRating, setAvgRating] = useState(0)
  const [userRating, setUserRating] = useState(null)
  const [showRatingSlider, setShowRatingSlider] = useState(false)
  const [ratingCount, setRatingCount] = useState(0)
  
  useEffect(() => {
    if (id) {
      const bookData = store.getBookById(id)
      setBook(bookData)
      setDiscussions(store.getDiscussions(parseInt(id)))
      const ratings = store.getRatings(parseInt(id))
      setRatingCount(ratings.length)
      setAvgRating(store.getAverageRating(parseInt(id)))
      if (user) setUserRating(store.getUserRating(parseInt(id), user.id))
    }
    if (tab) setActiveTab(tab)
  }, [id, tab, user])

  const handleRate = (rating) => {
    if (!isLoggedIn || !book) return
    const newAvg = store.addRating(book.id, user.id, rating)
    setUserRating(rating)
    setAvgRating(newAvg)
    setRatingCount(store.getRatings(book.id).length)
    setTimeout(() => setShowRatingSlider(false), 300)
  }

  const handlePostDiscussion = (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !isLoggedIn) return
    const discussion = store.addDiscussion({
      bookId: book.id,
      userId: user.id,
      userName: user.name || user.username,
      content: newMessage.trim()
    })
    setDiscussions([discussion, ...discussions])
    setNewMessage('')
  }

  const handlePostReply = (discussionId) => {
    if (!replyText.trim() || !isLoggedIn) return
    store.addReply(discussionId, {
      userId: user.id,
      userName: user.name || user.username,
      content: replyText.trim()
    })
    setDiscussions(store.getDiscussions(parseInt(id)))
    setReplyTo(null)
    setReplyText('')
  }

  const handleDeleteDiscussion = (discussionId) => {
    store.deleteDiscussion(discussionId)
    setDiscussions(discussions.filter(d => d.id !== discussionId))
  }

  const handleDeleteReply = (discussionId, replyId) => {
    store.deleteReply(discussionId, replyId)
    setDiscussions(store.getDiscussions(parseInt(id)))
  }

  if (!book) {
    return (
      <>
        <Navbar />
        <main className="pt-24 min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
            <h1 className="font-display text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Book Not Found</h1>
            <Link href="/library" className="btn-primary">Return to Library</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const tabs = [
    { id: 'lectures', label: 'Lectures', icon: FileText },
    { id: 'discussions', label: 'Discussions', icon: MessageCircle, count: discussions.length },
    { id: 'download', label: 'Download', icon: Download },
  ]

  return (
    <>
      <Head><title>{book.title} | Classic Revival</title></Head>
      <Navbar />

      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        {/* Header */}
        <section className="py-10 relative overflow-hidden" style={{ background: book.color }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/library" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5 font-accent">
              <ArrowLeft className="w-4 h-4" /> Back to Library
            </Link>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div 
                className="w-14 h-48 rounded-r flex-shrink-0 flex items-center justify-center"
                style={{ background: book.color, boxShadow: 'inset -5px 0 15px rgba(0,0,0,0.3), 6px 6px 20px rgba(0,0,0,0.4)' }}
              >
                <span className="font-accent text-white text-[10px] font-semibold text-center px-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {book.title}
                </span>
              </div>

              <div className="flex-1 text-white">
                <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-xs font-accent mb-2">{book.genre}</span>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">{book.title}</h1>
                <p className="font-accent text-lg text-white/80 mb-3">by {book.author}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className={`w-5 h-5 ${star <= Math.round(avgRating) ? 'fill-current' : ''}`} style={{ color: 'var(--gold)' }} />
                      ))}
                    </div>
                    <span className="font-bold">{avgRating || '—'}</span>
                    <span className="text-white/60 text-sm">({ratingCount})</span>
                  </div>
                  
                  {isLoggedIn && (
                    <div className="relative">
                      <button onClick={() => setShowRatingSlider(!showRatingSlider)} className="text-sm px-3 py-1.5 bg-white/20 rounded-full hover:bg-white/30 flex items-center gap-1">
                        {userRating ? `Your: ${userRating}★` : 'Rate'}
                        <ChevronRight className={`w-3 h-3 transition-transform ${showRatingSlider ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {showRatingSlider && (
                        <div className="absolute left-0 top-full mt-2 flex items-center gap-1 p-2 rounded-lg z-10 animate-fadeIn" style={{ background: 'rgba(0,0,0,0.9)' }}>
                          {[1,2,3,4,5].map(star => (
                            <button key={star} onClick={() => handleRate(star)} className="p-1 hover:scale-125 transition-transform">
                              <Star className={`w-6 h-6 ${star <= (userRating || 0) ? 'fill-current' : ''}`} style={{ color: 'var(--gold)' }} />
                            </button>
                          ))}
                          <button onClick={() => setShowRatingSlider(false)} className="ml-2 p-1 hover:bg-white/10 rounded">
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-white/70">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {book.year < 0 ? `${Math.abs(book.year)} BCE` : book.year}</span>
                  <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> {book.pages || 400} pages</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="border-b sticky top-16 z-30" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1">
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)} className={`book-tab flex items-center gap-2 ${activeTab === t.id ? 'active' : ''}`}>
                  <t.icon className="w-4 h-4" /> {t.label}
                  {t.count > 0 && <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs" style={{ background: 'rgba(114, 47, 55, 0.2)', color: 'var(--burgundy)' }}>{t.count}</span>}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'lectures' && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Lecture Notes</h2>
                <div className="space-y-4">
                  {defaultLectures.map((lecture, index) => (
                    <div key={lecture.id} className="p-5 rounded-xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(114, 47, 55, 0.15)', color: 'var(--burgundy)' }}>
                          <span className="font-display font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>{lecture.title}</h3>
                            <span className="flex items-center gap-1 text-sm flex-shrink-0" style={{ color: 'var(--text-secondary)' }}>
                              <Clock className="w-4 h-4" /> {lecture.duration}
                            </span>
                          </div>
                          <p className="font-body mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{lecture.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'discussions' && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Discussions</h2>
                
                {isLoggedIn ? (
                  <form onSubmit={handlePostDiscussion} className="mb-8">
                    <div className="p-4 rounded-xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(114, 47, 55, 0.15)' }}>
                          <User className="w-5 h-5" style={{ color: 'var(--burgundy)' }} />
                        </div>
                        <div className="flex-1">
                          <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Share your thoughts..." rows={3} className="w-full bg-transparent border-none outline-none resize-none font-body" style={{ color: 'var(--text-primary)' }} />
                          <div className="flex justify-end mt-2">
                            <button type="submit" disabled={!newMessage.trim()} className="btn-primary text-sm py-2 px-4 flex items-center gap-2 disabled:opacity-50">
                              <Send className="w-4 h-4" /> Post
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="p-6 rounded-xl text-center mb-8" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                    <p className="font-body" style={{ color: 'var(--text-secondary)' }}>Sign in to join the discussion</p>
                  </div>
                )}

                <div className="space-y-4">
                  {discussions.length > 0 ? discussions.map(discussion => (
                    <div key={discussion.id} className="p-5 rounded-xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(114, 47, 55, 0.15)' }}>
                          <span className="font-accent font-bold text-sm" style={{ color: 'var(--burgundy)' }}>{discussion.userName?.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>{discussion.userName}</span>
                              <span className="text-xs ml-2" style={{ color: 'var(--text-secondary)' }}>{new Date(discussion.createdAt).toLocaleDateString()}</span>
                            </div>
                            {isAdmin && (
                              <button onClick={() => handleDeleteDiscussion(discussion.id)} className="p-1.5 rounded hover:bg-red-500/10" title="Delete">
                                <Trash2 className="w-4 h-4 text-red-400" />
                              </button>
                            )}
                          </div>
                          <p className="font-body mt-2" style={{ color: 'var(--text-secondary)' }}>{discussion.content}</p>
                          
                          {discussion.replies?.length > 0 && (
                            <div className="mt-4 pl-4 border-l-2 space-y-3" style={{ borderColor: 'var(--border-color)' }}>
                              {discussion.replies.map(reply => (
                                <div key={reply.id} className="flex items-start gap-2">
                                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(114, 47, 55, 0.1)' }}>
                                    <span className="font-accent font-bold text-xs" style={{ color: 'var(--burgundy)' }}>{reply.userName?.charAt(0).toUpperCase()}</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-accent font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{reply.userName}</span>
                                      {isAdmin && (
                                        <button onClick={() => handleDeleteReply(discussion.id, reply.id)} className="p-1 rounded hover:bg-red-500/10">
                                          <Trash2 className="w-3 h-3 text-red-400" />
                                        </button>
                                      )}
                                    </div>
                                    <p className="font-body text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{reply.content}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {isLoggedIn && (
                            <div className="mt-3">
                              {replyTo === discussion.id ? (
                                <div className="flex items-center gap-2">
                                  <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Reply..." className="flex-1 px-3 py-2 rounded-lg text-sm" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }} autoFocus />
                                  <button onClick={() => handlePostReply(discussion.id)} className="p-2 rounded-lg" style={{ background: 'var(--burgundy)', color: 'white' }}><Send className="w-4 h-4" /></button>
                                  <button onClick={() => { setReplyTo(null); setReplyText(''); }} style={{ color: 'var(--text-secondary)' }}>Cancel</button>
                                </div>
                              ) : (
                                <button onClick={() => setReplyTo(discussion.id)} className="text-sm font-accent" style={{ color: 'var(--burgundy)' }}>Reply</button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-12">
                      <MessageCircle className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
                      <p className="font-body" style={{ color: 'var(--text-secondary)' }}>No discussions yet.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'download' && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Download</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {['PDF', 'EPUB', 'Audio'].map((format, i) => (
                    <button key={i} className="p-6 rounded-xl text-left hover:shadow-lg transition-all" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                      <Download className="w-8 h-8 mb-3" style={{ color: 'var(--burgundy)' }} />
                      <h3 className="font-display font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{format}</h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Free</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
