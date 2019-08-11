import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMovieListDetail } from '../../actions/movie';
import MyList from './MyList';
import Spinner from '../Layout/Spinner';

const LikedMovieList = ({ user, getMovieListDetail, movie }) => {
  useEffect(() => {
    let list = [];
    if (user) {
      user.likes.forEach(like => {
        list.push({ id: like.movieId, type: like.type });
      });
      getMovieListDetail(list);
    }
  }, [user, getMovieListDetail]);
  console.log(movie.myList);
  return (
    <Fragment>
      {movie.myList.loading ? <Spinner /> : <MyList movies={movie.myList} />}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getMovieListDetail }
)(LikedMovieList);
