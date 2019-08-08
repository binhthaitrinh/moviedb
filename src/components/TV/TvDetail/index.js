import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTvDetail, getCredit, getTrailer } from '../../../actions/tv';
import Spinner from '../../Layout/Spinner';
import MovieTrailer from '../../MovieDetail/MovieTrailer';
import ActorCarousel from '../../ImageCarousel/ActorCarousel';

const TvDetail = ({ match, tv, getTvDetail, getCredit, getTrailer }) => {
  useEffect(() => {
    getTvDetail(match.params.id);
    getCredit(match.params.id);
    getTrailer(match.params.id);
  }, [getTvDetail, match.params.id, getCredit, getTrailer]);
  return tv.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="header2">
        <div
          className="movie-header"
          style={{
            backgroundImage: `linear-gradient(0deg, rgb(0,0,0) 5%, rgba(0,0,0,0.45) 92%), url(https://image.tmdb.org/t/p/w1280${
              tv.tv.backdrop_path
            }`
          }}>
          <div className="general-info">
            <img
              src={`https://image.tmdb.org/t/p/w300${tv.tv.poster_path}`}
              alt="Poster"
            />
            <div className="movie-thumbnail-info">
              <h1 className="movie-thumbnail-title">{tv.tv.name}</h1>

              <div className="movie-rating">
                <p>{tv.tv.vote_average}</p>
                {[...Array(Math.ceil(tv.tv.vote_average / 2))].map((e, i) => (
                  <i className="fas fa-star red-bg" key={i} />
                ))}
                {[...Array(5 - Math.ceil(tv.tv.vote_average / 2))].map(
                  (e, i) => (
                    <i className="fas fa-star" key={i} />
                  )
                )}
              </div>

              <p className="long-post">
                {tv.tv.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-detail-section">
        <div className="movie-detail-content">
          <h1 className="movie-detail-header">Summary</h1>
          <p className="long-post">{tv.tv.overview}</p>
        </div>
        <ActorCarousel movieCredit={tv.credit} />
        <MovieTrailer trailers={tv.trailer} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  tv: state.tv
});

export default connect(
  mapStateToProps,
  { getTvDetail, getCredit, getTrailer }
)(TvDetail);
