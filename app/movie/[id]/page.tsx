import React from 'react';
import { fetchMovieById } from '@/lib/tmdb';
import { Movie } from '@/types/movie';
import Image from 'next/image';
import Link from 'next/link';

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie: Movie | null = await fetchMovieById(id);

  // Early return if movie is invalid
  if (!movie || !movie.id || !movie.title) {
    return (
      <div className="text-white p-10">
        <h2 className="text-2xl">Movie Not Found</h2>
        <Link href="/" className="text-amber-400">
          Back to Home
        </Link>
      </div>
    );
  }

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div className="text-white relative">

      {/* BACK BUTTON */}
      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md 
                     rounded-full border border-white/20 text-white 
                     hover:bg-white/20 transition shadow-xl"
        >
          <span className="text-xl">Back</span>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* HERO BACKDROP */}
      {backdrop && (
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={backdrop}
            alt={`${movie.title} backdrop`}
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        {/* POSTER */}
        <div className="flex justify-center md:justify-start">
          {poster ? (
            <Image
              src={poster}
              alt={movie.title}
              width={350}
              height={525}
              className="rounded-lg shadow-2xl"
            />
          ) : (
            <div className="w-[350px] h-[525px] bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>

          {/* TAGLINE */}
          {movie.tagline && (
            <p className="text-xl italic text-amber-400">"{movie.tagline}"</p>
          )}

          {/* OVERVIEW */}
          <p className="text-gray-300 leading-relaxed">
            {movie.overview || 'No overview available.'}
          </p>

          <div className="space-y-3 text-gray-300">

            {/* RELEASE DATE */}
            {movie.release_date && (
              <p>
                <span className="font-semibold text-white">Release Date: </span>
                {new Date(movie.release_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}

            {/* RUNTIME */}
            {movie.runtime && (
              <p>
                <span className="font-semibold text-white">Runtime: </span>
                {movie.runtime} minutes
              </p>
            )}

            {/* GENRES */}
            {(movie.genres?.length ?? 0) > 0 && (
              <div>
                <span className="font-semibold text-white">Genres: </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {movie.genres!.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* RATING */}
            {(movie.vote_average ?? 0) > 0 && (
              <p>
                <span className="font-semibold text-white">Rating: </span>
                <span className="text-amber-400">
                  {(movie.vote_average ?? 0).toFixed(1)} / 10
                </span>{' '}
                ({movie.vote_count ?? 0} votes)
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}