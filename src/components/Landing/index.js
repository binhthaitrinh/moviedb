import React, { useEffect, Fragment } from 'react';
import Slideshow from './Slideshow';
import { connect } from 'react-redux';
import { getTrending } from '../../actions/movie';
import { Spinner } from '../Layout';

const Landing = ({ movie, getTrending }) => {
  useEffect(() => {
    getTrending();
  }, [getTrending]);
  const { loading, movies } = movie.trending;
  console.log(movies);
  return loading ? <Spinner /> : <Slideshow movies={movies} />;
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getTrending }
)(Landing);
