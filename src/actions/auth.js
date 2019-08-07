import axios from 'axios';
import setAuthToken from '../components/utils/setAuthToken';
// import { setAlert } from './alert';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      'https://us-central1-social-ape-c1875.cloudfunctions.net/api/user'
    );
    console.log(res);
    dispatch({
      type: 'USER_LOADED',
      payload: res.data
    });
  } catch (err) {}
};

export const login = formData => async dispatch => {
  try {
    const res = await axios.post(
      'https://us-central1-social-ape-c1875.cloudfunctions.net/api/login',
      formData
    );

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT'
  });
};
