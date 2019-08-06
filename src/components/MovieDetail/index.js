import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getMovieDetail,
  getTrailer,
  getMovieCredit
} from '../../actions/movie';
import Spinner from '../Layout/Spinner';
import MovieTrailer from './MovieTrailer';
import ActorCarousel from '../ImageCarousel/ActorCarousel';

const MovieDetail = ({
  match,
  movie,
  movieCredit,
  getMovieDetail,
  getTrailer,
  getMovieCredit
}) => {
  useEffect(() => {
    getMovieDetail(match.params.id);
    getTrailer(match.params.id);
    getMovieCredit(match.params.id);
  }, [getMovieDetail, getTrailer]);
  return movie.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="header2">
        <div
          className="bg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
              movie.movie.backdrop_path
            }`
          }}
        />
      </div>

      <div className="movie-detail-section">
        <div className="movie-detail-content">
          <h1 className="movie-detail-header">Summary</h1>
          <p className="long-post">{movie.movie.overview}</p>
        </div>
        <ActorCarousel movieCredit={movieCredit} />
        <MovieTrailer id={movie.movie.id} trailers={movie.movie.trailers} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movie: state.movie,
  movieCredit: state.movie.movieCredit
});

export default connect(
  mapStateToProps,
  { getMovieDetail, getTrailer, getMovieCredit }
)(MovieDetail);
