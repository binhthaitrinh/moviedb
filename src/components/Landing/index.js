import React, { useEffect, Fragment, useState } from 'react';
import Slideshow from './Slideshow';
import { connect } from 'react-redux';
import { getTrending, getNowPlayingMovie } from '../../actions/movie';
import { Spinner } from '../Layout';
import { MovieCarousels } from '../Movie';
import TVCarousels from '../TV/TVCarousels';

const Landing = ({ movie, getTrending, getNowPlayingMovie }) => {
  const [type, setType] = useState('movie');
  useEffect(() => {
    getTrending();
  }, [getTrending, getNowPlayingMovie]);
  const { loading, movies } = movie.trending;
  const { nowPlayingMovies } = movie;
  console.log(movies);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="header2">
        <Slideshow movies={movies} />
      </div>

      <div className="section-content">
        <div className="type-selector">
          <button
            onClick={() => setType('movie')}
            className="btn btn-primary btn-lg">
            Movies
          </button>
          <button
            onClick={() => setType('tv')}
            className="btn btn-border-dark btn-lg">
            TV shows
          </button>
        </div>
        {type === 'movie' ? <MovieCarousels /> : <TVCarousels />}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getTrending }
)(Landing);
