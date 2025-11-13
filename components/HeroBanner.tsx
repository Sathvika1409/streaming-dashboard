import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';

export default function HeroBanner({ movie }: { movie: Movie | null }) {
  if (!movie) return null;

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <section className="relative h-[360px] md:h-[520px] rounded-lg overflow-hidden mt-20">
      {backdrop && (
        <Image
          src={backdrop}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-6 left-6 text-white max-w-lg">
        <h2 className="text-3xl md:text-5xl font-extrabold">{movie.title}</h2>
        <p className="mt-3 text-sm md:text-base opacity-90 line-clamp-3">
          {movie.overview}
        </p>

        <Link href={`/movie/${movie.id}`}>
          <button className="mt-5 px-5 py-2 bg-amber-400 text-black font-semibold rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </section>
  );
}
