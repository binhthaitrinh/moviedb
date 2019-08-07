import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageCarousel from '../ImageCarousel';
import {
  getTrending,
  getNowPlayingMovie,
  getPopularMovie,
  getTopRatedMovie
} from '../../actions/movie';
import SpinnerSm from '../Layout/SpinnerSm';

const MovieCarousels = ({
  movie: { trending, nowPlayingMovies, popularMovies, topRatedMovies },
  getTrending,
  getNowPlayingMovie,
  getPopularMovie,
  getTopRatedMovie
}) => {
  useEffect(() => {
    getNowPlayingMovie();
    getPopularMovie();
    getTopRatedMovie();
  }, [getNowPlayingMovie, getPopularMovie, getTopRatedMovie]);

  return nowPlayingMovies.loading ? (
    <SpinnerSm />
  ) : (
    <Fragment>
      <div className="section-movie-list">
        <h1 className="section-movie-list-header">Popular Movies</h1>
        <ImageCarousel movies={popularMovies.movies} />
      </div>
      <div className="section-movie-list">
        <h1 className="section-movie-list-header">Now Playing Movies</h1>
        <ImageCarousel movies={nowPlayingMovies.movies} />
      </div>
      <div className="section-movie-list">
        <h1 className="section-movie-list-header">Top Rated Movies</h1>
        <ImageCarousel movies={topRatedMovies.movies} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getTrending, getNowPlayingMovie, getPopularMovie, getTopRatedMovie }
)(MovieCarousels);
