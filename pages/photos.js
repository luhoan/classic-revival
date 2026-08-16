import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { PageHero } from '../components/ui'
import { useReveal } from '../lib/useReveal'

/* Every photograph of real Classic Revival work, in roughly the order it
   happened. Nothing staged, nothing stock — if it's here, it happened.
   `bg` gives the background-removed founders cutout something to sit on. */
const photos = [
  {
    src: '/photos/donation-box-atlanta.jpg',
    width: 1600,
    height: 1200,
    alt: 'A Classic Revival book donation box — white with blue trim on a yellow post — installed beside a sidewalk in Atlanta',
    caption: 'Our first book donation box, installed in Atlanta',
  },
  {
    src: '/photos/box-square.jpg',
    width: 900,
    height: 900,
    alt: 'A close view of the first Classic Revival donation box, white with blue trim, its sign inviting book donations',
    caption: 'The first box up close — stocked and ready for neighbors',
  },
  {
    src: '/photos/donation-box-atlanta-2.jpg',
    width: 1170,
    height: 1560,
    alt: 'A Classic Revival book donation box — green with a silver roof on a blue post — standing in a wooded Atlanta neighborhood',
    caption: 'Our second donation box, collecting books in Atlanta',
  },
  {
    src: '/photos/mailbox-first-books.jpg',
    width: 1200,
    height: 1599,
    alt: "Donated paperbacks and hardcovers laid out on a wooden floor — the first books given through Classic Revival's donation boxes",
    caption: 'The first books donated through our boxes, sorted and ready to move on',
  },
  {
    src: '/photos/sandy-springs-library-books.jpg',
    width: 1560,
    height: 1170,
    alt: 'Donated paperbacks and hardcovers spread across a table at the Sandy Springs Library used bookstore',
    caption: 'Books from our donation boxes, donated to the Sandy Springs Library',
  },
  {
    src: '/photos/school-donation-books.jpg',
    width: 1170,
    height: 1560,
    alt: 'Classic literature and philosophy paperbacks arranged on a library table, part of a donation to a partner school',
    caption: 'Part of a collection placed with a partner school',
  },
  {
    src: '/photos/books-band.jpg',
    width: 1170,
    height: 660,
    alt: 'Colorful covers of donated classic literature paperbacks filling a school library table',
    caption: 'Donated classics waiting for their next readers',
  },
  {
    src: '/photos/founders-group.png',
    width: 1200,
    height: 795,
    alt: 'Raphael Pagani, Levi Segal, and Hershey Woolfson seated side by side, each holding a book from an early Classic Revival collection',
    caption: 'The founders — Raphael Pagani, Levi Segal, and Hershey Woolfson (left to right)',
    bg: true,
  },
]

export default function Photos() {
  useReveal()
  return (
    <>
      <Seo
        title="Photos"
        description="Photographs of Classic Revival's real work: our book donation boxes in Atlanta, books donated to the Sandy Springs Library and partner schools, and the students behind it all."
        path="/photos"
      />
      <Navbar />

      <main id="main" className="pt-16">
        <PageHero
          eyebrow="Photos"
          title="The work, in pictures."
          lead="Every photograph here is real — our boxes, our books, and the people moving them. As the work grows, so will this page."
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {photos.map((photo) => (
                <figure key={photo.src} className="break-inside-avoid mb-8 reveal">
                  <div className="relative p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                    <div
                      className="overflow-hidden border"
                      style={{
                        borderColor: 'var(--border-color)',
                        ...(photo.bg
                          ? {
                              background:
                                'radial-gradient(120% 90% at 50% 12%, var(--bg-secondary) 0%, var(--bg-tertiary) 58%, #DCD2BA 100%)',
                            }
                          : {}),
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        loading="lazy"
                        className={`block w-full h-auto ${photo.bg ? 'pt-4' : ''}`}
                      />
                    </div>
                  </div>
                  <figcaption className="caption-italic mt-3">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
