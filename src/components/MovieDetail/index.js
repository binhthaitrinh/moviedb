import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getMovieDetail,
  getTrailer,
  getMovieCredit,
  likeMovie,
  unlikeMovie
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
  getMovieCredit,
  likeMovie,
  user,
  unlikeMovie
}) => {
  useEffect(() => {
    getMovieDetail(match.params.id);
    getTrailer(match.params.id);
    getMovieCredit(match.params.id);
  }, [getMovieDetail, getTrailer, getMovieCredit, match.params.id]);

  const renderLikeButton = id => {
    let exist = false;
    if (user) {
      user.likes.map(like => {
        if (parseInt(like.movieId) === id) {
          exist = true;
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
          onClick={() => likeMovie(movie.movie.id)}>
          <i className="far fa-heart" />
        </button>
      );
    }
    // if (user) {
    //   if (user.likes.indexOf(id) === -1) {
    //     return (
    //       <button
    //         className="btn btn-normal"
    //         onClick={() => likeMovie(movie.movie.id)}>
    //         <i className="far fa-heart" />
    //       </button>
    //     );
    //   } else {
    //     return (
    //       <button
    //         className="btn btn-normal"
    //         onClick={() => likeMovie(movie.movie.id)}>
    //         <i className="fas fa-heart" />
    //       </button>
    //     );
    //   }
    // }
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
              <h1 className="movie-thumbnail-title">{movie.movie.title}</h1>

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

              <p className="long-post" style={{ marginBottom: '1rem' }}>
                {movie.movie.genres.map(genre => genre.name).join(', ')}
              </p>
              {renderLikeButton(movie.movie.id)}
              {/* <button
                className="btn btn-normal"
                onClick={() => likeMovie(movie.movie.id)}>
                <i class="far fa-heart" />
              </button> */}

              {/* <i class="fas fa-heart"></i> */}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-detail-section">
        <div className="movie-detail-content">
          <h1 className="movie-detail-header">Summary</h1>
          <p className="long-post">{movie.movie.overview}</p>
        </div>
        <ActorCarousel movieCredit={movieCredit} />
        <MovieTrailer trailers={movie.movieTrailer} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  movie: state.movie,
  movieCredit: state.movie.movieCredit,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getMovieDetail, getTrailer, getMovieCredit, likeMovie, unlikeMovie }
)(MovieDetail);
