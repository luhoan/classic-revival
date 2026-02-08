import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, Menu, X, ExternalLink } from 'lucide-react'

export default function BookReader({ bookContent }) {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [showChapterMenu, setShowChapterMenu] = useState(false)
  const [pageTransition, setPageTransition] = useState('none')

  if (!bookContent || !bookContent.chapters || bookContent.chapters.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
          <p className="font-body" style={{ color: 'var(--text-secondary)' }}>
            Book content not available
          </p>
        </div>
      </div>
    )
  }

  const currentChapter = bookContent.chapters[currentChapterIndex]
  const currentPage = currentChapter?.pages?.[currentPageIndex]
  const totalPagesInChapter = currentChapter?.pages?.length || 0

  // Calculate global page number
  const getGlobalPageNumber = () => {
    let pagesBefore = 0
    for (let i = 0; i < currentChapterIndex; i++) {
      pagesBefore += bookContent.chapters[i].pages?.length || 0
    }
    return pagesBefore + currentPageIndex + 1
  }

  const getTotalPages = () => {
    return bookContent.chapters.reduce((sum, ch) => sum + (ch.pages?.length || 0), 0)
  }

  const handleNextPage = () => {
    if (pageTransition !== 'none') return // Prevent double animations

    setPageTransition('next')

    // Update page/chapter immediately
    if (currentPageIndex < totalPagesInChapter - 1) {
      setCurrentPageIndex(currentPageIndex + 1)
    } else if (currentChapterIndex < bookContent.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1)
      setCurrentPageIndex(0)
    }

    // Reset transition after animation completes
    setTimeout(() => {
      setPageTransition('none')
    }, 300)
  }

  const handlePrevPage = () => {
    if (pageTransition !== 'none') return // Prevent double animations

    setPageTransition('prev')

    // Update page/chapter immediately
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1)
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1)
      const prevChapter = bookContent.chapters[currentChapterIndex - 1]
      setCurrentPageIndex((prevChapter.pages?.length || 1) - 1)
    }

    // Reset transition after animation completes
    setTimeout(() => {
      setPageTransition('none')
    }, 300)
  }

  const goToChapter = (chapterIndex) => {
    if (pageTransition !== 'none') return // Prevent double animations

    setCurrentChapterIndex(chapterIndex)
    setCurrentPageIndex(0)
    setShowChapterMenu(false)

    setPageTransition('next')
    setTimeout(() => {
      setPageTransition('none')
    }, 300)
  }

  const canGoPrev = currentChapterIndex > 0 || currentPageIndex > 0
  const canGoNext = currentChapterIndex < bookContent.chapters.length - 1 || currentPageIndex < totalPagesInChapter - 1

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && canGoNext) handleNextPage()
      if (e.key === 'ArrowLeft' && canGoPrev) handlePrevPage()
      if (e.key === 'Escape' && showChapterMenu) setShowChapterMenu(false)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentChapterIndex, currentPageIndex, canGoNext, canGoPrev, showChapterMenu])

  return (
    <div className="relative">
      {/* Chapter Menu */}
      {showChapterMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop" onClick={() => setShowChapterMenu(false)}>
          <div className="w-full max-w-md max-h-[80vh] overflow-hidden rounded-xl animate-fadeInUp" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }} onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Chapters</h3>
              <button onClick={() => setShowChapterMenu(false)} className="p-2 rounded-lg hover:opacity-70">
                <X className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              </button>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh - 80px)' }}>
              {bookContent.chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => goToChapter(index)}
                  className={`w-full p-4 text-left transition-all border-b ${currentChapterIndex === index ? 'active-chapter' : ''}`}
                  style={{
                    borderColor: 'var(--border-color)',
                    background: currentChapterIndex === index ? 'rgba(114, 47, 55, 0.1)' : 'transparent'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{ background: currentChapterIndex === index ? 'var(--burgundy)' : 'rgba(114, 47, 55, 0.15)', color: currentChapterIndex === index ? 'white' : 'var(--burgundy)' }}>
                      {chapter.chapter_index || index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>{chapter.title}</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{chapter.pages?.length || 0} pages</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reader Header */}
      <div className="sticky top-16 z-20 p-4 border-b flex items-center justify-between" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
        <button onClick={() => setShowChapterMenu(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:opacity-80" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
          <Menu className="w-4 h-4" />
          <span className="font-accent text-sm">Chapter {currentChapter?.chapter_index || currentChapterIndex + 1}</span>
        </button>

        <div className="text-center flex-1">
          <p className="font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>
            Page {getGlobalPageNumber()} of {getTotalPages()}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={!canGoPrev}
            className="p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
            title="Previous page (←)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextPage}
            disabled={!canGoNext}
            className="p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
            title="Next page (→)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`page-content ${pageTransition === 'next' ? 'page-turn-next' : pageTransition === 'prev' ? 'page-turn-prev' : ''}`}
          style={{
            minHeight: '60vh',
            padding: '2rem',
            borderRadius: '0.5rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)'
          }}
        >
          {/* Chapter Title (show on first page of chapter) */}
          {currentPageIndex === 0 && (
            <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <h2 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {currentChapter.title}
              </h2>
              <p className="text-sm font-accent" style={{ color: 'var(--text-secondary)' }}>
                Chapter {currentChapter.chapter_index || currentChapterIndex + 1}
              </p>
            </div>
          )}

          {/* Page Text */}
          <div
            className="book-page-text"
            style={{ color: 'var(--text-primary)' }}
            dangerouslySetInnerHTML={{ __html: currentPage || '<p>Page not available</p>' }}
          />
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-6">
          <p className="text-xs font-accent" style={{ color: 'var(--text-secondary)' }}>
            Use arrow keys (← →) or click the buttons to navigate
          </p>
        </div>
      </div>

      <style jsx>{`
        .page-content {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .page-turn-next {
          animation: pageFlipNext 0.3s ease;
        }

        .page-turn-prev {
          animation: pageFlipPrev 0.3s ease;
        }

        @keyframes pageFlipNext {
          0% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
          50% {
            opacity: 0.3;
            transform: translateX(20px) rotateY(-5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        @keyframes pageFlipPrev {
          0% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
          50% {
            opacity: 0.3;
            transform: translateX(-20px) rotateY(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        .book-page-text :global(p) {
          margin-bottom: 1em;
          line-height: 1.8;
          font-family: var(--font-body);
        }

        .book-page-text :global(p:last-child) {
          margin-bottom: 0;
        }

        .modal-backdrop {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  )
}
