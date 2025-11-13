# StreamFlix – Netflix-Style Dashboard (Next.js 14)

**Live Demo**: [https://your-app.vercel.app](https://your-app.vercel.app)  
**GitHub**: [https://github.com/yourusername/streamflix-dashboard](https://github.com/yourusername/streamflix-dashboard)

---

## Features

| Feature | Implementation |
|-------|----------------|
| **Next.js 14 App Router** | Server Components, Dynamic Routes |
| **TypeScript** | Full type safety with TMDB interfaces |
| **Tailwind CSS** | Responsive, dark-themed UI |
| **TMDB API** | Popular, Top Rated, Now Playing |
| **Server-Side Rendering** | Zero client fetch, instant load |
| **Optimized Images** | `next/image` with `fill`, `priority` |
| **Dynamic Movie Pages** | `/movie/[id]` with full details |
| **Horizontal Scroll Rows** | Smooth UX, mobile-friendly |
| **Vercel Deployment** | Live with env vars secured |

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: [The Movie Database (TMDB)](https://www.themov.com)
- **Deployment**: Vercel

---

## How to Run Locally

```bash
git clone https://github.com/yourusername/streamflix-dashboard.git
cd streamflix-dashboard

# Install
npm install

# Add your TMDB API key
cp .env.example .env.local
# Edit .env.local → TMDB_API_KEY=your_key_here

# Run
npm run dev