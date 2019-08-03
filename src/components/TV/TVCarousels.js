import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageCarousel from '../ImageCarousel';
import { getLatestTV, getPopularTV, getTopRatedTV } from '../../actions/tv';
import SpinnerSm from '../Layout/SpinnerSm';

const TVCarousels = ({
  tv: { popularTV, topRatedTV, latestTV },
  getLatestTV,
  getPopularTV,
  getTopRatedTV
}) => {
  useEffect(() => {
    getLatestTV();
    getPopularTV();
    getTopRatedTV();
  }, [getLatestTV, getPopularTV, getTopRatedTV]);

  return popularTV.loading || topRatedTV.loading || latestTV.loading ? (
    <SpinnerSm />
  ) : (
    <Fragment>
      <div className="section-movie-list">
        {console.log(popularTV.movies, 232323)}
        <h1 className="section-movie-list-header">Popular TV</h1>
        <ImageCarousel movies={popularTV.movies} />
      </div>
      <div className="section-movie-list">
        <h1 className="section-movie-list-header">Latest TV</h1>
        <ImageCarousel movies={latestTV.movies} />
      </div>
      <div className="section-movie-list">
        <h1 className="section-movie-list-header">Top Rated TV</h1>
        <ImageCarousel movies={topRatedTV.movies} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  tv: state.tv
});

export default connect(
  mapStateToProps,
  { getLatestTV, getPopularTV, getTopRatedTV }
)(TVCarousels);
