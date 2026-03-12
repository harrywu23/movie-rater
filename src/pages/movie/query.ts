export const fetchMovieDetails = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`,
  );
  return res.json();
};
