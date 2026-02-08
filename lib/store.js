// Data Store - Simulates persistent storage using localStorage
// In production, this would connect to a real database

// Book designs configuration - easy to customize per book
export const bookDesigns = {
  // Design types: 'plain', 'single-band', 'double-band', 'gilded', 'embossed'
  // Band colors work best on dark book colors
  1: { design: 'gilded', width: 52, height: 280, bandColor: '#C9A227' },
  2: { design: 'double-band', width: 58, height: 300, bandColor: '#8B7355' },
  3: { design: 'single-band', width: 48, height: 260, bandColor: '#D4A574' },
  4: { design: 'plain', width: 44, height: 250, bandColor: null },
  5: { design: 'single-band', width: 46, height: 255, bandColor: '#A0522D' },
  6: { design: 'double-band', width: 62, height: 310, bandColor: '#DAA520' },
  7: { design: 'gilded', width: 56, height: 290, bandColor: '#FFD700' },
  8: { design: 'double-band', width: 65, height: 320, bandColor: '#BDB76B' },
  9: { design: 'single-band', width: 50, height: 275, bandColor: '#CD853F' },
  10: { design: 'gilded', width: 54, height: 285, bandColor: '#B8860B' },
  11: { design: 'plain', width: 60, height: 295, bandColor: null },
  12: { design: 'double-band', width: 64, height: 315, bandColor: '#DEB887' },
  13: { design: 'single-band', width: 68, height: 330, bandColor: '#D2691E' },
  14: { design: 'gilded', width: 66, height: 325, bandColor: '#FFD700' },
  15: { design: 'plain', width: 45, height: 252, bandColor: null },
}

// Default book design for new books
export const defaultBookDesign = { design: 'plain', width: 50, height: 270, bandColor: null }

// Dark book colors for library display
const darkBookColors = [
  '#2a1f1a', '#1a1a2e', '#1e3d2f', '#2d1b2d', '#1a2633',
  '#3d2b1f', '#1f2937', '#2c1810', '#1a2d1a', '#2e1a1a',
  '#1f1a2e', '#2a2520', '#1a2a2a', '#2d2418', '#1e1e28',
  '#722F37', '#1E3A5F', '#2D4A3E', '#4A3728', '#5C4033',
  '#8B4513', '#6B4423', '#3D5C3D', '#483D8B', '#8B0000',
  '#2F4F4F', '#191970', '#4B0082', '#006400', '#800020'
]

// Initial books data
const initialBooks = [
  { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Romance', color: '#722F37', pages: 432 },
  { id: 2, title: 'Moby Dick', author: 'Herman Melville', year: 1851, genre: 'Adventure', color: '#1E3A5F', pages: 720 },
  { id: 3, title: 'Great Expectations', author: 'Charles Dickens', year: 1861, genre: 'Coming-of-age', color: '#2D4A3E', pages: 505 },
  { id: 4, title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, genre: 'Gothic', color: '#4A3728', pages: 500 },
  { id: 5, title: 'Wuthering Heights', author: 'Emily Brontë', year: 1847, genre: 'Gothic', color: '#5C4033', pages: 416 },
  { id: 6, title: 'The Odyssey', author: 'Homer', year: -800, genre: 'Epic', color: '#8B4513', pages: 541 },
  { id: 7, title: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605, genre: 'Satire', color: '#6B4423', pages: 863 },
  { id: 8, title: 'War and Peace', author: 'Leo Tolstoy', year: 1869, genre: 'Historical', color: '#3D5C3D', pages: 1225 },
  { id: 9, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', year: 1866, genre: 'Psychological', color: '#483D8B', pages: 671 },
  { id: 10, title: 'The Divine Comedy', author: 'Dante Alighieri', year: 1320, genre: 'Epic', color: '#8B0000', pages: 798 },
  { id: 11, title: 'Anna Karenina', author: 'Leo Tolstoy', year: 1877, genre: 'Realism', color: '#2F4F4F', pages: 864 },
  { id: 12, title: 'Brothers Karamazov', author: 'Fyodor Dostoevsky', year: 1880, genre: 'Philosophical', color: '#191970', pages: 824 },
  { id: 13, title: 'Les Misérables', author: 'Victor Hugo', year: 1862, genre: 'Historical', color: '#4B0082', pages: 1463 },
  { id: 14, title: 'Count of Monte Cristo', author: 'Alexandre Dumas', year: 1844, genre: 'Adventure', color: '#006400', pages: 1276 },
  { id: 15, title: 'Madame Bovary', author: 'Gustave Flaubert', year: 1856, genre: 'Realism', color: '#800020', pages: 329 },
]

// Initial admin user - cannot be deleted
const masterAdmin = {
  id: 'admin-master',
  username: 'luan',
  email: 'luan@classicrevival.org',
  password: 'classicrevival123',
  name: 'Luan',
  isAdmin: true,
  isMasterAdmin: true,
  createdAt: new Date().toISOString()
}

// Store class for managing all data
class DataStore {
  constructor() {
    this.isClient = typeof window !== 'undefined'
  }

  // Helper to get data from localStorage
  getData(key, defaultValue) {
    if (!this.isClient) return defaultValue
    try {
      const data = localStorage.getItem(`cr_${key}`)
      return data ? JSON.parse(data) : defaultValue
    } catch {
      return defaultValue
    }
  }

  // Helper to set data to localStorage
  setData(key, value) {
    if (!this.isClient) return
    try {
      localStorage.setItem(`cr_${key}`, JSON.stringify(value))
    } catch (e) {
      console.error('Storage error:', e)
    }
  }

  // Initialize store with default data if empty
  initialize() {
    if (!this.isClient) return
    
    // Initialize books
    if (!localStorage.getItem('cr_books')) {
      this.setData('books', initialBooks)
    }
    
    // Initialize users with master admin
    const users = this.getData('users', [])
    if (!users.find(u => u.id === 'admin-master')) {
      this.setData('users', [masterAdmin, ...users.filter(u => u.id !== 'admin-master')])
    }
    
    // Initialize other collections
    if (!localStorage.getItem('cr_discussions')) {
      this.setData('discussions', [])
    }
    if (!localStorage.getItem('cr_ratings')) {
      this.setData('ratings', {})
    }
    if (!localStorage.getItem('cr_applications')) {
      this.setData('applications', [])
    }
  }

  // ========== USERS ==========
  getUsers() {
    return this.getData('users', [masterAdmin])
  }

  getUserByUsername(username) {
    const users = this.getUsers()
    return users.find(u => u.username.toLowerCase() === username.toLowerCase())
  }

  getUserByEmail(email) {
    const users = this.getUsers()
    return users.find(u => u.email.toLowerCase() === email.toLowerCase())
  }

  authenticateUser(usernameOrEmail, password) {
    const users = this.getUsers()
    const user = users.find(u => 
      (u.username.toLowerCase() === usernameOrEmail.toLowerCase() || 
       u.email.toLowerCase() === usernameOrEmail.toLowerCase()) &&
      u.password === password
    )
    if (user) {
      const { password: _, ...safeUser } = user
      return safeUser
    }
    return null
  }

  createUser(userData) {
    const users = this.getUsers()
    
    // Check for existing username or email
    if (users.find(u => u.username.toLowerCase() === userData.username.toLowerCase())) {
      return { error: 'Username already taken' }
    }
    if (users.find(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
      return { error: 'Email already registered' }
    }

    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      isAdmin: false,
      isMasterAdmin: false,
      createdAt: new Date().toISOString()
    }
    
    this.setData('users', [...users, newUser])
    const { password: _, ...safeUser } = newUser
    return { user: safeUser }
  }

  deleteUser(userId) {
    const users = this.getUsers()
    const user = users.find(u => u.id === userId)
    
    if (!user) return { error: 'User not found' }
    if (user.isMasterAdmin) return { error: 'Cannot delete master admin' }
    
    this.setData('users', users.filter(u => u.id !== userId))
    return { success: true }
  }

  makeAdmin(userId) {
    const users = this.getUsers()
    const userIndex = users.findIndex(u => u.id === userId)
    
    if (userIndex === -1) return { error: 'User not found' }
    
    users[userIndex].isAdmin = true
    this.setData('users', users)
    return { success: true }
  }

  removeAdmin(userId) {
    const users = this.getUsers()
    const user = users.find(u => u.id === userId)
    
    if (!user) return { error: 'User not found' }
    if (user.isMasterAdmin) return { error: 'Cannot remove master admin privileges' }
    
    const userIndex = users.findIndex(u => u.id === userId)
    users[userIndex].isAdmin = false
    this.setData('users', users)
    return { success: true }
  }

  // ========== BOOKS ==========
  // Load library master data
  async loadLibraryMaster() {
    if (this.libraryMaster) return this.libraryMaster

    try {
      // Fetch from public folder
      const response = await fetch('/library_master.json')
      this.libraryMaster = await response.json()
      return this.libraryMaster
    } catch (error) {
      console.error('Failed to load library master:', error)
      return []
    }
  }

  // Helper to map complex genres to simplified categories
  simplifyGenre(genreArray) {
    if (!genreArray || genreArray.length === 0) return 'Philosophy'

    const genreStr = Array.isArray(genreArray) ? genreArray[0].toLowerCase() : String(genreArray).toLowerCase()

    // Map complex genres to simple categories
    if (genreStr.includes('fiction') || genreStr.includes('novel')) return 'Fiction'
    if (genreStr.includes('drama') || genreStr.includes('play')) return 'Drama'
    if (genreStr.includes('poetry') || genreStr.includes('poem')) return 'Poetry'
    if (genreStr.includes('philosophy') || genreStr.includes('philosophical')) return 'Philosophy'
    if (genreStr.includes('history') || genreStr.includes('historical')) return 'History'
    if (genreStr.includes('biography') || genreStr.includes('autobio')) return 'Biography'
    if (genreStr.includes('epic') || genreStr.includes('mythology')) return 'Epic'
    if (genreStr.includes('religion') || genreStr.includes('theology')) return 'Religion'
    if (genreStr.includes('political') || genreStr.includes('politics')) return 'Politics'
    if (genreStr.includes('science') || genreStr.includes('knowledge')) return 'Science'
    if (genreStr.includes('literature') || genreStr.includes('literary')) return 'Literature'
    if (genreStr.includes('psychology')) return 'Psychology'
    if (genreStr.includes('romance')) return 'Romance'

    return 'Classic'
  }

  // Get books list (lightweight metadata)
  async getBooksFromLibrary() {
    const libraryMaster = await this.loadLibraryMaster()

    // Convert library books to display format
    return libraryMaster.map((book, index) => {
      // Calculate total pages from chapters
      const totalPages = book.chapters?.reduce((sum, ch) => sum + (ch.pages?.length || 0), 0) || 400

      // Extract year if available
      let year = 1800
      if (book.year) {
        year = parseInt(book.year)
      }

      return {
        id: index + 1,
        originalId: book.id,
        title: book.title,
        author: book.author,
        year: year,
        genre: this.simplifyGenre(book.genre),
        color: darkBookColors[index % darkBookColors.length] || '#722F37',
        pages: totalPages,
        gutenberg_url: book.gutenberg_url,
        hasExternalResources: (book.external_resources?.length || 0) > 0
      }
    })
  }

  getBooks() {
    // Return books from localStorage, defaulting to initialBooks if not yet loaded from library
    const storedBooks = this.getData('books', null)
    return storedBooks || initialBooks
  }

  // Initialize books from library_master.json
  async initializeBooksFromLibrary() {
    const libraryBooks = await this.getBooksFromLibrary()
    if (libraryBooks && libraryBooks.length > 0) {
      // Don't overwrite if already initialized
      if (!this.getData('books_initialized', false)) {
        this.setData('books', libraryBooks)
        this.setData('books_initialized', true)
      }
    }
    return this.getBooks()
  }

  getBookById(id) {
    const books = this.getBooks()
    return books.find(b => b.id === parseInt(id))
  }

  // Get full book content with chapters and pages
  async getBookContent(bookId) {
    const libraryMaster = await this.loadLibraryMaster()

    // Try to find by originalId first, then by index
    const books = this.getBooks()
    const book = books.find(b => b.id === parseInt(bookId))

    if (book && book.originalId) {
      return libraryMaster.find(b => b.id === book.originalId)
    }

    // Fallback: try direct index
    const index = parseInt(bookId) - 1
    return libraryMaster[index] || null
  }

  addBook(bookData) {
    const books = this.getBooks()
    const maxId = Math.max(...books.map(b => b.id), 0)
    const newBook = {
      id: maxId + 1,
      ...bookData,
      createdAt: new Date().toISOString()
    }
    this.setData('books', [...books, newBook])
    return newBook
  }

  updateBook(id, bookData) {
    const books = this.getBooks()
    const index = books.findIndex(b => b.id === parseInt(id))
    if (index === -1) return { error: 'Book not found' }
    
    books[index] = { ...books[index], ...bookData }
    this.setData('books', books)
    return books[index]
  }

  deleteBook(id) {
    const books = this.getBooks()
    this.setData('books', books.filter(b => b.id !== parseInt(id)))
    return { success: true }
  }

  // ========== DISCUSSIONS ==========
  getDiscussions(bookId = null) {
    const discussions = this.getData('discussions', [])
    if (bookId) {
      return discussions.filter(d => d.bookId === parseInt(bookId))
    }
    return discussions
  }

  addDiscussion(discussionData) {
    const discussions = this.getDiscussions()
    const newDiscussion = {
      id: `disc-${Date.now()}`,
      ...discussionData,
      replies: [],
      createdAt: new Date().toISOString()
    }
    this.setData('discussions', [...discussions, newDiscussion])
    return newDiscussion
  }

  addReply(discussionId, replyData) {
    const discussions = this.getDiscussions()
    const index = discussions.findIndex(d => d.id === discussionId)
    if (index === -1) return { error: 'Discussion not found' }
    
    const reply = {
      id: `reply-${Date.now()}`,
      ...replyData,
      createdAt: new Date().toISOString()
    }
    discussions[index].replies.push(reply)
    this.setData('discussions', discussions)
    return reply
  }

  deleteDiscussion(discussionId) {
    const discussions = this.getDiscussions()
    this.setData('discussions', discussions.filter(d => d.id !== discussionId))
    return { success: true }
  }

  deleteReply(discussionId, replyId) {
    const discussions = this.getDiscussions()
    const index = discussions.findIndex(d => d.id === discussionId)
    if (index === -1) return { error: 'Discussion not found' }
    
    discussions[index].replies = discussions[index].replies.filter(r => r.id !== replyId)
    this.setData('discussions', discussions)
    return { success: true }
  }

  // ========== RATINGS ==========
  getRatings(bookId) {
    const ratings = this.getData('ratings', {})
    return ratings[bookId] || []
  }

  getAverageRating(bookId) {
    const bookRatings = this.getRatings(bookId)
    if (bookRatings.length === 0) return 0
    const sum = bookRatings.reduce((acc, r) => acc + r.rating, 0)
    return Math.round((sum / bookRatings.length) * 10) / 10
  }

  addRating(bookId, userId, rating) {
    const ratings = this.getData('ratings', {})
    if (!ratings[bookId]) {
      ratings[bookId] = []
    }
    
    // Remove existing rating by this user
    ratings[bookId] = ratings[bookId].filter(r => r.userId !== userId)
    
    // Add new rating
    ratings[bookId].push({
      userId,
      rating,
      createdAt: new Date().toISOString()
    })
    
    this.setData('ratings', ratings)
    return this.getAverageRating(bookId)
  }

  getUserRating(bookId, userId) {
    const bookRatings = this.getRatings(bookId)
    const userRating = bookRatings.find(r => r.userId === userId)
    return userRating ? userRating.rating : null
  }

  // ========== APPLICATIONS ==========
  getApplications() {
    return this.getData('applications', [])
  }

  addApplication(applicationData) {
    const applications = this.getApplications()
    const newApplication = {
      id: `app-${Date.now()}`,
      ...applicationData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    this.setData('applications', [...applications, newApplication])
    return newApplication
  }

  updateApplicationStatus(applicationId, status) {
    const applications = this.getApplications()
    const index = applications.findIndex(a => a.id === applicationId)
    if (index === -1) return { error: 'Application not found' }
    
    applications[index].status = status
    applications[index].updatedAt = new Date().toISOString()
    this.setData('applications', applications)
    return applications[index]
  }

  deleteApplication(applicationId) {
    const applications = this.getApplications()
    this.setData('applications', applications.filter(a => a.id !== applicationId))
    return { success: true }
  }
}

// Export singleton instance
export const store = new DataStore()

// Helper to calculate book width based on pages
export function calculateBookWidth(pages) {
  const minWidth = 38
  const maxWidth = 72
  const minPages = 200
  const maxPages = 1500
  
  const normalizedPages = Math.min(Math.max(pages, minPages), maxPages)
  const ratio = (normalizedPages - minPages) / (maxPages - minPages)
  return Math.round(minWidth + ratio * (maxWidth - minWidth))
}

// Helper to get book design
export function getBookDesign(bookId, pages) {
  const design = bookDesigns[bookId] || { ...defaultBookDesign }
  if (!design.width) {
    design.width = calculateBookWidth(pages || 400)
  }
  return design
}
