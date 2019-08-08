import {
  GET_POPULAR_TV,
  GET_LATEST_TV,
  GET_TOP_RATED_TV,
  GET_TV_DETAIL,
  GET_TV_CREDIT,
  GET_TV_TRAILER
} from '../actions/types';

const initialState = {
  latestTV: {
    movies: [],
    loading: true,
    error: {}
  },
  popularTV: {
    movies: [],
    loading: true,
    error: {}
  },
  topRatedTV: {
    movies: [],
    loading: true,
    error: {}
  },
  tv: null,
  loading: true,
  credit: {
    cast: [],
    loading: true,
    error: {}
  },
  trailer: {
    trailers: null,
    loading: true,
    error: {}
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR_TV:
      return {
        ...state,
        popularTV: {
          ...state.popularTV,
          movies: payload,
          loading: false
        }
      };
    case GET_LATEST_TV:
      return {
        ...state,
        latestTV: {
          ...state.latestTV,
          movies: payload,
          loading: false
        }
      };
    case GET_TOP_RATED_TV:
      return {
        ...state,
        topRatedTV: {
          ...state.topRatedTV,
          movies: payload,
          loading: false
        }
      };
    case GET_TV_DETAIL:
      return {
        ...state,
        tv: payload,
        loading: false
      };
    case GET_TV_CREDIT:
      return {
        ...state,
        credit: {
          ...state.credit,
          cast: payload,
          loading: false
        }
      };
    case GET_TV_TRAILER:
      return {
        ...state,
        trailer: {
          ...state.trailer,
          trailers: payload,
          loading: false
        }
      };
    default:
      return state;
  }
}
