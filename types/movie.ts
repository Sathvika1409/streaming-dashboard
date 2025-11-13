export interface Movie {
  id: number;
  title: string;
  name?: string;
  original_title?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string | null;
  release_date?: string | null;
  vote_average?: number | null;
  genres?: { id: number; name: string }[] | null;
}
