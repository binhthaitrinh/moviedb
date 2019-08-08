import React, { Fragment } from 'react';

const MovieTrailer = props => {
  console.log(props.trailers);
  const renderTrailer = () => {
    if (props.trailers.trailers && props.trailers.trailers.length > 0) {
      return (
        <Fragment>
          <iframe
            title={props.trailers.trailers[0].name}
            width="728"
            height="409"
            style={{ marginTop: '2rem' }}
            src={`https://www.youtube.com/embed/${
              props.trailers.trailers[0].key
            }`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Fragment>
      );
    } else {
      return <p className="long-post">No trailers available!</p>;
    }
  };

  return (
    <div className="movie-detail-content">
      <h1 className="movie-detail-header">Trailer</h1>
      {renderTrailer()}
    </div>
  );
};

export default MovieTrailer;
