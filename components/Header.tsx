'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-amber-400">
          StoryBit
        </Link>

        <ul className="hidden md:flex gap-6 text-slate-200 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><a href="#popular">Popular</a></li>
          <li><a href="#top-rated">Top Rated</a></li>
          <li><a href="#now-playing">Now Playing</a></li>
        </ul>
      </nav>
    </header>
  );
}
