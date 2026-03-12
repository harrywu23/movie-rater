export const fetchMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`,
  );
  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`,
  );
  return res.json();
};
