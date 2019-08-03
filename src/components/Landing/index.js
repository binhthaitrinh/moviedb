import React, { useEffect, Fragment } from 'react';
import Slideshow from './Slideshow';
import { connect } from 'react-redux';
import { getTrending } from '../../actions/movie';
import { Spinner } from '../Layout';
import ImageCarousel from '../ImageCarousel';

const Landing = ({ movie, getTrending }) => {
  useEffect(() => {
    getTrending();
  }, [getTrending]);
  const { loading, movies } = movie.trending;
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
          <button className="btn btn-primary btn-lg">Movies</button>
          <button className="btn btn-border-dark btn-lg">TV shows</button>
        </div>
        <div className="section-movie-list">
          <h1 className="section-movie-list-header">Trending</h1>
          <ImageCarousel movies={movies} />
        </div>
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
