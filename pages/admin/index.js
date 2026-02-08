import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AuthContext } from '../_app'
import { store, bookDesigns, defaultBookDesign } from '../../lib/store'
import { Shield, BookOpen, Users, ClipboardList, Plus, Trash2, Edit, X, Save } from 'lucide-react'

export default function AdminPanel() {
  const router = useRouter()
  const { user, isAdmin, isMasterAdmin } = useContext(AuthContext)
  const [books, setBooks] = useState([])
  const [showAddBook, setShowAddBook] = useState(false)
  const [editingBook, setEditingBook] = useState(null)
  const [newBook, setNewBook] = useState({
    title: '', author: '', year: '', genre: '', color: '#722F37', pages: ''
  })

  useEffect(() => {
    if (!isAdmin) {
      router.push('/')
      return
    }
    setBooks(store.getBooks())
  }, [isAdmin, router])

  const handleAddBook = (e) => {
    e.preventDefault()
    const book = store.addBook({
      ...newBook,
      year: parseInt(newBook.year),
      pages: parseInt(newBook.pages) || 400
    })
    setBooks([...books, book])
    setNewBook({ title: '', author: '', year: '', genre: '', color: '#722F37', pages: '' })
    setShowAddBook(false)
  }

  const handleDeleteBook = (id) => {
    if (confirm('Delete this book?')) {
      store.deleteBook(id)
      setBooks(books.filter(b => b.id !== id))
    }
  }

  const handleUpdateBook = (e) => {
    e.preventDefault()
    store.updateBook(editingBook.id, editingBook)
    setBooks(books.map(b => b.id === editingBook.id ? editingBook : b))
    setEditingBook(null)
  }

  if (!isAdmin) return null

  const stats = [
    { label: 'Total Books', value: books.length, icon: BookOpen, href: '#books' },
    { label: 'Users', value: store.getUsers().length, icon: Users, href: '/admin/users' },
    { label: 'Applications', value: store.getApplications().length, icon: ClipboardList, href: '/admin/applications' },
  ]

  const genres = ['Romance', 'Adventure', 'Coming-of-age', 'Gothic', 'Epic', 'Satire', 'Historical', 'Psychological', 'Realism', 'Philosophical']

  return (
    <>
      <Head><title>Admin Panel | Classic Revival</title></Head>
      <Navbar />

      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <section className="py-10" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8" style={{ color: 'var(--gold)' }} />
              <h1 className="font-display text-3xl font-bold text-white">Admin Panel</h1>
            </div>
            <p className="text-white/70">Manage books, users, and applications</p>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {stats.map((stat, i) => (
                <Link key={i} href={stat.href} className="p-5 rounded-xl transition-all hover:shadow-lg" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                      <p className="font-display text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
                    </div>
                    <stat.icon className="w-10 h-10" style={{ color: 'var(--burgundy)', opacity: 0.5 }} />
                  </div>
                </Link>
              ))}
            </div>

            {/* Books Management */}
            <div id="books" className="rounded-xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Manage Books</h2>
                <button onClick={() => setShowAddBook(true)} className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Book
                </button>
              </div>

              {/* Add Book Form */}
              {showAddBook && (
                <form onSubmit={handleAddBook} className="mb-6 p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>Add New Book</h3>
                    <button type="button" onClick={() => setShowAddBook(false)}><X className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} /></button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Title" value={newBook.title} onChange={e => setNewBook({...newBook, title: e.target.value})} className="input-classic text-sm" required />
                    <input type="text" placeholder="Author" value={newBook.author} onChange={e => setNewBook({...newBook, author: e.target.value})} className="input-classic text-sm" required />
                    <input type="number" placeholder="Year" value={newBook.year} onChange={e => setNewBook({...newBook, year: e.target.value})} className="input-classic text-sm" required />
                    <select value={newBook.genre} onChange={e => setNewBook({...newBook, genre: e.target.value})} className="input-classic text-sm" required>
                      <option value="">Select Genre</option>
                      {genres.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <input type="number" placeholder="Pages" value={newBook.pages} onChange={e => setNewBook({...newBook, pages: e.target.value})} className="input-classic text-sm" />
                    <div className="flex items-center gap-2">
                      <input type="color" value={newBook.color} onChange={e => setNewBook({...newBook, color: e.target.value})} className="w-10 h-10 rounded cursor-pointer" />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Book Color</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button type="submit" className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                      <Save className="w-4 h-4" /> Save Book
                    </button>
                  </div>
                </form>
              )}

              {/* Edit Book Form */}
              {editingBook && (
                <form onSubmit={handleUpdateBook} className="mb-6 p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>Edit Book</h3>
                    <button type="button" onClick={() => setEditingBook(null)}><X className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} /></button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" value={editingBook.title} onChange={e => setEditingBook({...editingBook, title: e.target.value})} className="input-classic text-sm" required />
                    <input type="text" value={editingBook.author} onChange={e => setEditingBook({...editingBook, author: e.target.value})} className="input-classic text-sm" required />
                    <input type="number" value={editingBook.year} onChange={e => setEditingBook({...editingBook, year: parseInt(e.target.value)})} className="input-classic text-sm" required />
                    <select value={editingBook.genre} onChange={e => setEditingBook({...editingBook, genre: e.target.value})} className="input-classic text-sm" required>
                      {genres.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <input type="number" value={editingBook.pages || ''} onChange={e => setEditingBook({...editingBook, pages: parseInt(e.target.value)})} className="input-classic text-sm" />
                    <div className="flex items-center gap-2">
                      <input type="color" value={editingBook.color} onChange={e => setEditingBook({...editingBook, color: e.target.value})} className="w-10 h-10 rounded cursor-pointer" />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Book Color</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button type="submit" className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                      <Save className="w-4 h-4" /> Update
                    </button>
                  </div>
                </form>
              )}

              {/* Books List */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Book</th>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Author</th>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Genre</th>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Year</th>
                      <th className="text-right py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map(book => (
                      <tr key={book.id} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-8 rounded" style={{ background: book.color }} />
                            <span className="font-accent" style={{ color: 'var(--text-primary)' }}>{book.title}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{book.author}</td>
                        <td className="py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{book.genre}</td>
                        <td className="py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{book.year}</td>
                        <td className="py-3 px-2 text-right">
                          <button onClick={() => setEditingBook(book)} className="p-1.5 rounded hover:bg-blue-500/10 mr-1"><Edit className="w-4 h-4 text-blue-400" /></button>
                          <button onClick={() => handleDeleteBook(book.id)} className="p-1.5 rounded hover:bg-red-500/10"><Trash2 className="w-4 h-4 text-red-400" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
