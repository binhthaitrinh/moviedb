import axios from 'axios';
import {
  GET_TRENDING,
  GET_NOW_PLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOP_RATED_MOVIE,
  GET_MOVIE_DETAIL,
  SET_LOADING,
  GET_MOVIE_TRAILER,
  GET_MOVIE_CREDIT
} from './types';
import {
  API_KEY,
  PATH_BASE,
  PARAM_TRENDING,
  PARAM_NOW_PLAYING_MOVIE,
  PARAM_MOVIE_TYPE,
  PARAM_POPULAR_MOVIE
} from '../constants/movieDB';

export const getTrending = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}${PARAM_TRENDING}/all/day?api_key=${API_KEY}`
    );

    setTimeout(() => {
      dispatch({
        type: GET_TRENDING,
        payload: res.data.results
      });
    }, 400);
  } catch (err) {}
};

export const getNowPlayingMovie = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}${PARAM_MOVIE_TYPE}/${PARAM_NOW_PLAYING_MOVIE}?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({
      type: GET_NOW_PLAYING_MOVIE,
      payload: res.data.results
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMovie = () => async dispatch => {
  try {
    const res = await axios.get(`
    ${PATH_BASE}${PARAM_MOVIE_TYPE}/${PARAM_POPULAR_MOVIE}?api_key=${API_KEY}&language=en-US&page=1
    `);

    console.log(res);

    dispatch({
      type: GET_POPULAR_MOVIE,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getTopRatedMovie = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}${PARAM_MOVIE_TYPE}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({
      type: GET_TOP_RATED_MOVIE,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getMovieDetail = id => async dispatch => {
  dispatch({
    type: SET_LOADING
  });
  try {
    const res = await axios.get(
      `${PATH_BASE}movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    console.log(res);
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: res.data
    });
  } catch (err) {}
};

export const getTrailer = id => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );

    dispatch({
      type: GET_MOVIE_TRAILER,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getMovieCredit = id => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}movie/${id}/credits?api_key=${API_KEY}`
    );

    dispatch({
      type: GET_MOVIE_CREDIT,
      payload: res.data.cast
    });
  } catch (err) {}
};
