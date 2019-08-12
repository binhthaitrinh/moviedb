import React from 'react';
import { Link } from 'react-router-dom';

const MyList = ({ movies }) => {
  console.log(movies.movies);

  return (
    <div className="header2" style={{ padding: '8rem 5rem' }}>
      <h1 className="search-page-header">My List</h1>
      <div className="search-movie-list">
        {movies.movies.map(movie => (
          <div key={movie.id} className="search-movie-item">
            <Link
              to={
                movie.seasons
                  ? `/tv/details/${movie.id}`
                  : `/movie/details/${movie.id}`
              }>
              <img
                key={movie.id}
                className="search-movie-img"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : 'https://via.placeholder.com/320x200'
                }
                alt={`${movie.original_name}`}
              />
            </Link>
            <Link
              to={
                movie.seasons
                  ? `/tv/details/${movie.id}`
                  : `/movie/details/${movie.id}`
              }>
              <h1 className="search-movie-title">
                {movie.title || movie.original_name}
              </h1>
            </Link>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
