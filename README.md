# Classic Revival

A 501(c)(3) nonprofit dedicated to bringing classic literature back to life.

## Features

- **3D Bookshelf Library** - Browse books on realistic wooden shelves with leather-textured book covers
- **User Accounts** - Sign up, login with username or email, persistent sessions
- **Admin Panel** - Manage books, users, and applications
- **Discussions & Ratings** - Engage with other readers on each book
- **Applications** - Apply to join as contributor, chapter leader, or developer

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

### Option 1: One-Click Deploy
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Manual
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop this project folder
3. Wait for deployment

## Admin Access

Default admin account:
- **Username:** `luan`
- **Password:** `classicrevival123`

This account can:
- Add/edit/delete books
- Manage users (make/remove admins)
- View and manage applications
- Delete discussions

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS + Custom CSS
- **Icons:** Lucide React
- **Storage:** localStorage (simulated backend)

## Project Structure

```
classic-revival/
├── components/
│   ├── AuthModal.js    # Login/signup modal
│   ├── Footer.js       # Site footer
│   └── Navbar.js       # Navigation with admin menu
├── lib/
│   └── store.js        # Data store (books, users, etc.)
├── pages/
│   ├── admin/          # Admin panel pages
│   ├── book/[id].js    # Book detail page
│   ├── apply.js        # Application form
│   ├── donate.js       # Donation page
│   ├── index.js        # Homepage
│   └── library.js      # Book library with 3D shelves
├── public/
│   └── logo.png        # Logo
├── styles/
│   └── globals.css     # Global styles
└── vercel.json         # Vercel config
```

## Customization

### Adding Books
1. Login as admin
2. Go to Admin Panel
3. Click "Add Book"
4. Fill in details (title, author, year, genre, color, pages)

### Book Designs
Edit `lib/store.js` to customize book spine designs:
```javascript
bookDesigns = {
  1: { design: 'gilded', width: 52, height: 280, bandColor: '#C9A227' },
  // ...
}
```
Design options: `plain`, `single-band`, `double-band`, `gilded`

## Environment

No environment variables required - the app uses localStorage for data persistence.

For production with a real backend, replace the store.js methods with API calls.

## License

MIT

---

Made with ❤️ by the Classic Revival team
