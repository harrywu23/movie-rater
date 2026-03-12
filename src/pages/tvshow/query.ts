export const fetchTvShowDetails = async (tvShowId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`,
  );
  return res.json();
};
