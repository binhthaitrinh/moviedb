import axios from 'axios';
import { GET_TRENDING } from './types';
import { API_KEY, PATH_BASE, PARAM_TRENDING } from '../constants/movieDB';

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
