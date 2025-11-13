'use client';
import Image from 'next/image';
import React from 'react';
import { Movie } from '@/types/movie';

export default function MovieRow({ movies, title }: { movies: Movie[]; title: string }) {
  if (!Array.isArray(movies) || movies.length === 0) return null;

  return (
    <section className="my-8">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {movies.map((movie) => {
          const id = movie && (movie.id ?? (movie as any)._id ?? (movie as any).movie_id);
          if (!id) return null;
          const href = `/movie/${String(id)}`;
          const posterSrc = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : '/placeholder.png';

          return (
            <div key={String(id)} className="min-w-[140px] block">
              <a href={href} className="cursor-pointer block">
                <Image
                  src={posterSrc}
                  alt={movie.title ?? 'Poster'}
                  width={180}
                  height={260}
                  className="rounded-md hover:scale-105 transition-transform"
                />
                <p className="mt-1 text-sm text-slate-200">{movie.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
