import React from 'react';
import { fetchPopular, fetchTopRated, fetchNowPlaying } from '@/lib/tmdb';
import MovieRow from '@/components/MovieRow';
import HeroBanner from '@/components/HeroBanner';

export default async function HomePage() {
  const [popular, topRated, nowPlaying] = await Promise.all([
    fetchPopular().catch(() => []),
    fetchTopRated().catch(() => []),
    fetchNowPlaying().catch(() => [])
  ]);

  const heroMovie = Array.isArray(popular) && popular.length ? popular[0] : null;

  return (
    <main className="text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <HeroBanner movie={heroMovie} />

        <div className="mt-8">
          <MovieRow movies={popular} title="🔥 Popular Movies" />
          <MovieRow movies={topRated} title="⭐ Top Rated" />
          <MovieRow movies={nowPlaying} title="🎬 Now Playing" />
        </div>
      </div>
    </main>
  );
}
