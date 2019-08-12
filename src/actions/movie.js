import axios from 'axios';
import {
  GET_TRENDING,
  GET_NOW_PLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOP_RATED_MOVIE,
  GET_MOVIE_DETAIL,
  SET_LOADING,
  GET_MOVIE_TRAILER,
  GET_MOVIE_CREDIT,
  SEARCH_MOVIE
} from './types';
import {
  API_KEY,
  PATH_BASE,
  PARAM_TRENDING,
  PARAM_NOW_PLAYING_MOVIE,
  PARAM_MOVIE_TYPE,
  PARAM_POPULAR_MOVIE
} from '../constants/movieDB';

const config = {
  headers: null
};

export const getTrending = () => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}${PARAM_TRENDING}/all/day?api_key=${API_KEY}`,
      config
    );

    setTimeout(() => {
      dispatch({
        type: GET_TRENDING,
        payload: res.data.results
      });
    }, 400);
  } catch (err) {}
};

export const getNowPlayingMovie = (type = 'movie') => async dispatch => {
  let res = null;
  try {
    if (type === 'movie') {
      res = await axios.get(
        `${PATH_BASE}${PARAM_MOVIE_TYPE}/${PARAM_NOW_PLAYING_MOVIE}?api_key=${API_KEY}&language=en-US&page=1`,
        config
      );
    } else {
      res = await axios.get(
        `${PATH_BASE}tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
        config
      );
    }

    dispatch({
      type: GET_NOW_PLAYING_MOVIE,
      payload: res.data.results
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMovie = (type = 'movie') => async dispatch => {
  let res = null;
  try {
    if (type === 'movie') {
      res = await axios.get(
        `
      ${PATH_BASE}${PARAM_MOVIE_TYPE}/${PARAM_POPULAR_MOVIE}?api_key=${API_KEY}&language=en-US&page=1
      `,
        config
      );
    } else {
      res = await axios.get(
        `${PATH_BASE}tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
        config
      );
    }

    dispatch({
      type: GET_POPULAR_MOVIE,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getTopRatedMovie = (type = 'movie') => async dispatch => {
  let res = null;
  try {
    if (type === 'movie') {
      res = await axios.get(
        `${PATH_BASE}${PARAM_MOVIE_TYPE}/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
        config
      );
    } else {
      res = await axios.get(
        `${PATH_BASE}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
        config
      );
    }

    dispatch({
      type: GET_TOP_RATED_MOVIE,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getMovieDetail = (id, type = 'movie') => async dispatch => {
  dispatch({
    type: SET_LOADING
  });
  try {
    const res = await axios.get(
      `${PATH_BASE}${type}/${id}?api_key=${API_KEY}&language=en-US`,
      config
    );
    console.log(res);
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: res.data
    });
  } catch (err) {}
};

export const getMovieListDetail = list => async dispatch => {
  let result = [];
  let res = {};
  try {
    for (let i = 0; i < list.length; i++) {
      if (list[i].type === 'movie') {
        res = await axios.get(
          `${PATH_BASE}movie/${list[i].id}?api_key=${API_KEY}&language=en-US`,
          config
        );
      } else {
        res = await axios.get(
          `${PATH_BASE}tv/${list[i].id}?api_key=${API_KEY}&language=en-US`,
          config
        );
      }

      result.push(res.data);
    }
    // const res1 = await axios.get(
    //   `${PATH_BASE}movie/${list[0]}?api_key=${API_KEY}&language=en-US`,
    //   config
    // );
    // const res2 = await axios.get(
    //   `${PATH_BASE}movie/${list[1]}?api_key=${API_KEY}&language=en-US`,
    //   config
    // );
    // const res3 = await axios.get(
    //   `${PATH_BASE}movie/${list[2]}?api_key=${API_KEY}&language=en-US`,
    //   config
    // );
    // result = [res1.data, res2.data, res3.data];

    // let result = [];
    // console.log(result);
    // let res;
    // try {
    //   list.forEach(async item => {
    //     res = await axios.get(
    //       `${PATH_BASE}movie/${item}?api_key=${API_KEY}&language=en-US`,
    //       config
    //     );
    //     result = [...result, res.data];
    //   });
    //   console.log(result['1']);
    //   console.log(result, 234);
    //   let result2 = Object.keys(result).map(i => result[i]);
    //   console.log(result2, 345);
    dispatch({
      type: 'GET_MOVIE_LIST_DETAIL',
      payload: result
    });
  } catch (err) {}
};

export const getTrailer = (id, type = 'movie') => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}${type}/${id}/videos?api_key=${API_KEY}&language=en-US`,
      config
    );

    dispatch({
      type: GET_MOVIE_TRAILER,
      payload: res.data.results
    });
  } catch (err) {}
};

export const getMovieCredit = (id, type = 'movie') => async dispatch => {
  try {
    const res = await axios.get(
      `${PATH_BASE}${type}/${id}/credits?api_key=${API_KEY}`,
      config
    );

    dispatch({
      type: GET_MOVIE_CREDIT,
      payload: res.data.cast
    });
  } catch (err) {}
};

export const searchMovie = query => async dispatch => {
  dispatch({
    type: 'LOADING_SEARCH'
  });
  try {
    const res = await axios.get(
      `${PATH_BASE}search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
      config
    );

    // console.log(res.data.results);
    setTimeout(() => {
      dispatch({
        type: SEARCH_MOVIE,
        payload: res.data.results
      });
    }, 500);
  } catch (err) {}
};

export const likeMovie = (movieId, type = 'movie') => async dispatch => {
  try {
    const res = await axios.get(
      `https://us-central1-moviedb-f4641.cloudfunctions.net/api/movie/${movieId}/${type}/like`
    );
    dispatch({
      type: 'LIKE_MOVIE',
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const unlikeMovie = movieId => async dispatch => {
  try {
    const res = await axios.get(
      `https://us-central1-moviedb-f4641.cloudfunctions.net/api/movie/${movieId}/unlike`
    );

    dispatch({
      type: 'UNLIKE_MOVIE',
      payload: res.data.likeId
    });
  } catch (err) {
    console.log(err);
  }
};

export const setMovieLoading = () => dispatch => {
  dispatch({
    type: 'SET_MOVIE_LOADING'
  });
};
