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
  movieTrailer: {
    trailers: null,
    loading: true,
    error: {}
  },
  movie: null,
  loading: true,
  error: {},
  searchedMovie: {
    movies: [],
    loading: true,
    error: {}
  },
  myList: {
    movies: [],
    loading: true,
    error: {}
  }
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
    case 'GET_MOVIE_LIST_DETAIL':
      return {
        ...state,
        myList: {
          ...state.myList,
          movies: payload,
          loading: false
        }
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
        movieTrailer: {
          ...state.movieTrailer,
          trailers: payload,
          loading: false
        }
      };
    case GET_MOVIE_CREDIT:
      return {
        ...state,
        movieCredit: { ...state.movieCredit, cast: payload, loading: false }
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        searchedMovie: {
          ...state.searchedMovie,
          movies: payload,
          loading: false
        }
      };
    case 'LOADING_SEARCH':
      return {
        ...state,
        searchedMovie: {
          ...state.searchedMovie,
          loading: true
        }
      };

    default:
      return state;
  }
}
