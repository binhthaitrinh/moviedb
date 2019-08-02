import { GET_TRENDING } from '../actions/types';

const initialState = {
  trending: {
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
    default:
      return state;
  }
}
