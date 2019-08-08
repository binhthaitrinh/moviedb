const initialState = {
  loading: false,
  errors: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOADING_UI':
      return {
        ...state,
        loading: true
      };
    case 'CLEAR_LOADING':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
