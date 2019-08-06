import {
  GET_TRENDING,
  GET_NOW_PLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOP_RATED_MOVIE,
  GET_MOVIE_DETAIL,
  SET_LOADING,
  GET_MOVIE_TRAILER,
  GET_MOVIE_CREDIT
} from '../actions/types';

const initialState = {
  trending: {
    movies: [],
    loading: true,
    error: {}
  },
  nowPlayingMovies: {
    movies: [],
    loading: true,
    error: {}
  },
  popularMovies: {
    movies: [],
    loading: true,
    error: {}
  },
  topRatedMovies: {
    movies: [],
    loading: true,
    error: {}
  },
  movieCredit: {
    cast: [],
    loading: true,
    error: {}
  },
  movie: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRENDING:
      return {
        ...state,
        trending: {
          ...state.trending,
          movies: payload,
          loading: false
        }
      };
    case GET_NOW_PLAYING_MOVIE:
      return {
        ...state,
        nowPlayingMovies: {
          ...state.nowPlayingMovies,
          movies: payload,
          loading: false
        }
      };
    case GET_POPULAR_MOVIE:
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          movies: payload,
          loading: false
        }
      };
    case GET_TOP_RATED_MOVIE:
      return {
        ...state,
        topRatedMovies: {
          ...state.topRatedMovies,
          movies: payload,
          loading: false
        }
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movie: payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        movie: null
      };
    case GET_MOVIE_TRAILER:
      return {
        ...state,
        movie: {
          ...state.movie,
          trailers: payload
        },
        loading: false
      };
    case GET_MOVIE_CREDIT:
      return {
        ...state,
        movieCredit: { ...state.movieCredit, cast: payload, loading: false }
      };
    default:
      return state;
  }
}
