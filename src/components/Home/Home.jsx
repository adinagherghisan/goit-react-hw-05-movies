import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../Api/MovieApi';

import FilmsList from '../FilmList/FilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <FilmsList movies={movies} />
    </>
  );
};

export default Home;