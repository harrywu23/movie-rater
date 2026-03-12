export const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzNkOGI5NGZkMzAyYzFiMzgxOWJiM2YxZGMyNzA5MyIsIm5iZiI6MTc3MjA3OTExNy4wOCwic3ViIjoiNjk5ZmM4MGRhYWY5Mzc1ZDFmZmY0YzJmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.D33ZFq6aT4Bt-ahHLRe0vqfU4SWuCZhZjjZ85fXJgW0",
      },
    },
  );

  return res.json();
};
