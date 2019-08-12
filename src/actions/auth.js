import axios from 'axios';
import setAuthToken from '../components/utils/setAuthToken';
import { setAlert } from './alert';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      'https://us-central1-moviedb-f4641.cloudfunctions.net/api/auth'
    );
    console.log(res);
    dispatch({
      type: 'USER_LOADED',
      payload: res.data
    });
  } catch (err) {}
};

export const login = formData => async dispatch => {
  dispatch({ type: 'LOADING_UI' });
  try {
    const res = await axios.post(
      'https://us-central1-moviedb-f4641.cloudfunctions.net/api/auth',
      formData
    );

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    });

    dispatch(loadUser());
    dispatch({ type: 'CLEAR_LOADING' });
  } catch (err) {
    console.log(err);
  }
};

export const register = formData => async dispatch => {
  try {
    const res = await axios.post(
      'https://us-central1-moviedb-f4641.cloudfunctions.net/api/users',
      formData
    );
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT'
  });
};
