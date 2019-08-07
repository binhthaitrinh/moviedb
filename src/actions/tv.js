import axios from 'axios';

import { GET_LATEST_TV, GET_TOP_RATED_TV, GET_POPULAR_TV } from './types';
import {
  API_KEY,
  PATH_BASE
  // PARAM_TRENDING,
  // PARAM_NOW_PLAYING_MOVIE,
  // PARAM_MOVIE_TYPE,
  // PARAM_POPULAR_MOVIE,
  // PARAM_LATEST_TV
} from '../constants/movieDB';

export const getTopRatedTV = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({
      type: GET_TOP_RATED_TV,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getLatestTV = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({
      type: GET_LATEST_TV,
      payload: res.data.results
    });
  } catch (err) {
    console.log(err, 22332);
  }
};

export const getPopularTV = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    dispatch({
      type: GET_POPULAR_TV,
      payload: res.data.results
    });
  } catch (err) {}
};
