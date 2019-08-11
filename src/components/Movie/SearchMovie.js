import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions/movie';
import Spinner from '../Layout/Spinner';
import Genre from '../../constants/Genre';
import TvGenre from '../../constants/TvGenre';
import { Link } from 'react-router-dom';

const SearchMovie = ({ searchMovie, match, searchedMovie }) => {
  useEffect(() => {
    searchMovie(match.params.query);
  }, [searchMovie, match.params.query]);

  const helper = id => {
    let result = '';
    Genre.genres.forEach(genre => {
      if (genre.id === id) {
        result = genre.name;
      }
    });
    return result;
  };

  const helperTv = id => {
    let result = '';
    TvGenre.genres.forEach(genre => {
      if (genre.id === id) {
        result = genre.name;
      }
    });
    return result;
  };

  const findGenre = movie => {
    let result;
    if (movie.media_type === 'tv') {
      result = movie.genre_ids.map(id => helperTv(id)).join(', ');
    } else {
      result = movie.genre_ids.map(id => helper(id)).join(', ');
    }
    return result;
  };

  return searchedMovie.loading ? (
    <Spinner />
  ) : (
    <div className="header2" style={{ padding: '8rem 5rem' }}>
      <h1 className="search-page-header">
        Search result for{' '}
        <span style={{ color: 'red', textTransform: 'uppercase' }}>
          {match.params.query}
        </span>
      </h1>
      <div className="search-movie-list">
        {searchedMovie.movies.map(movie => (
          <div className="search-movie-item">
            <Link
              to={
                movie.media_type === 'tv'
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

            <h1 className="search-movie-title">
              {movie.title || movie.original_name}
            </h1>
            <p>{findGenre(movie)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchedMovie: state.movie.searchedMovie
});

export default connect(
  mapStateToProps,
  { searchMovie }
)(SearchMovie);
