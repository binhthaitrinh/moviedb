import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageCarousel from '../ImageCarousel';
import { getLatestTV, getPopularTV, getTopRatedTV } from '../../actions/tv';
import {
  getPopularMovie,
  getNowPlayingMovie,
  getTopRatedMovie
} from '../../actions/movie';
import SpinnerSm from '../Layout/SpinnerSm';

const TVCarousels = ({
  movie: { nowPlayingMovies, popularMovies, topRatedMovies },
  getPopularMovie,
  getNowPlayingMovie,
  getTopRatedMovie
}) => {
  useEffect(() => {
    getNowPlayingMovie('tv');
    getPopularMovie('tv');
    getTopRatedMovie('tv');
  }, [getPopularMovie, getNowPlayingMovie, getTopRatedMovie]);

  return nowPlayingMovies.loading ||
    topRatedMovies.loading ||
    popularMovies.loading ? (
    <SpinnerSm />
  ) : (
    <Fragment>
      <div className="section-movie-list">
        <h1 className="text-heading">Popular TV</h1>
        <ImageCarousel movies={popularMovies.movies} type="tv" />
      </div>
      <div className="section-movie-list">
        <h1 className="text-heading">Latest TV</h1>
        <ImageCarousel movies={nowPlayingMovies.movies} type="tv" />
      </div>
      <div className="section-movie-list">
        <h1 className="text-heading">Top Rated TV</h1>
        <ImageCarousel movies={topRatedMovies.movies} type="tv" />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getPopularMovie, getNowPlayingMovie, getTopRatedMovie }
)(TVCarousels);
