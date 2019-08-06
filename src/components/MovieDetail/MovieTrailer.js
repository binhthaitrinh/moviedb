import React, { Fragment, useEffect } from 'react';
import { getTrailer } from '../../actions/movie';
import { connect } from 'react-redux';
import SpinnerSm from '../Layout/SpinnerSm';

const MovieTrailer = props => {
  const renderTrailer = () => {
    if (props.trailers && props.trailers.length > 0) {
      return (
        <Fragment>
          <iframe
            title={props.trailers[0].name}
            width="728"
            height="409"
            style={{ marginTop: '2rem' }}
            src={`https://www.youtube.com/embed/${props.trailers[0].key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Fragment>
      );
    } else {
      return <p className="long-post">Np trailers available!</p>;
    }
  };

  return (
    <div className="movie-detail-content">
      <h1 className="movie-detail-header">Trailers</h1>
      {renderTrailer()}
    </div>
  );
};

export default MovieTrailer;
