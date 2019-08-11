import axios from 'axios';

import {
  GET_LATEST_TV,
  GET_TOP_RATED_TV,
  GET_POPULAR_TV,
  GET_TV_DETAIL,
  GET_TV_CREDIT,
  GET_TV_TRAILER
} from './types';
import { API_KEY, PATH_BASE } from '../constants/movieDB';

const config = {
  headers: null
};

export const getTopRatedTV = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      config
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
      `${PATH_BASE}tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
      config
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
      `${PATH_BASE}tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
      config
    );

    dispatch({
      type: GET_POPULAR_TV,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getTvDetail = id => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/${id}?api_key=${API_KEY}&language=en-US`,
      config
    );

    console.log(res);

    dispatch({
      type: GET_TV_DETAIL,
      payload: res.data
    });
  } catch (err) {}
};

export const getCredit = id => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/${id}/credits?api_key=${API_KEY}`,
      config
    );

    dispatch({
      type: GET_TV_CREDIT,
      payload: res.data.cast
    });
  } catch (err) {}
};

export const getTrailer = id => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}tv/${id}/videos?api_key=${API_KEY}`,
      config
    );

    dispatch({
      type: GET_TV_TRAILER,
      payload: res.data.results
    });
  } catch (err) {}
};
