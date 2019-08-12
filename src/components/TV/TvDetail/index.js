import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getMovieDetail,
  getMovieCredit,
  getTrailer
} from '../../../actions/movie';
import { likeMovie, unlikeMovie } from '../../../actions/movie';
import Spinner from '../../Layout/Spinner';
import MovieTrailer from '../../MovieDetail/MovieTrailer';
import ActorCarousel from '../../ImageCarousel/ActorCarousel';

const TvDetail = ({
  match,
  user,
  movie,
  getMovieDetail,
  likeMovie,
  unlikeMovie,
  getMovieCredit,
  getTrailer
}) => {
  useEffect(() => {
    getMovieDetail(match.params.id, 'tv');
    getMovieCredit(match.params.id, 'tv');
    getTrailer(match.params.id, 'tv');
  }, [getMovieDetail, match.params.id, getMovieCredit, getTrailer]);

  const renderLikeButton = id => {
    let exist = false;
    if (user) {
      user.likes.map(like => {
        if (parseInt(like.movieId) === id) {
          return (exist = true);
        } else {
          return (exist = false);
        }
      });
    }

    if (exist) {
      return (
        <button
          className="btn like-btn-active"
          onClick={() => unlikeMovie(movie.movie.id)}>
          <i className="fas fa-heart" />
        </button>
      );
    } else {
      return (
        <button
          className="btn like-btn-nonactive"
          onClick={() => likeMovie(movie.movie.id, 'tv')}>
          <i className="far fa-heart" />
        </button>
      );
    }
  };

  return movie.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="header2">
        <div
          className="movie-header"
          style={{
            backgroundImage: `linear-gradient(0deg, rgb(0,0,0) 5%, rgba(0,0,0,0.45) 92%), url(https://image.tmdb.org/t/p/w1280${
              movie.movie.backdrop_path
            }`
          }}>
          <div className="general-info">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.movie.poster_path}`}
              alt="Poster"
            />
            <div className="movie-thumbnail-info">
              <h1 className="movie-thumbnail-title">{movie.movie.name}</h1>

              <div className="movie-rating">
                <p>{movie.movie.vote_average}</p>
                {[...Array(Math.ceil(movie.movie.vote_average / 2))].map(
                  (e, i) => (
                    <i className="fas fa-star red-bg" key={i} />
                  )
                )}
                {[...Array(5 - Math.ceil(movie.movie.vote_average / 2))].map(
                  (e, i) => (
                    <i className="fas fa-star" key={i} />
                  )
                )}
              </div>

              <p className="long-post">
                {movie.movie.genres.map(genre => genre.name).join(', ')}
              </p>
              {renderLikeButton(movie.movie.id)}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-detail-section">
        <div className="movie-detail-content">
          <h1 className="movie-detail-header">Summary</h1>
          <p className="long-post">{movie.movie.overview}</p>
        </div>
        <ActorCarousel movieCredit={movie.movieCredit} />
        <MovieTrailer trailers={movie.movieTrailer} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movie: state.movie,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getMovieDetail, getMovieCredit, getTrailer, likeMovie, unlikeMovie }
)(TvDetail);
