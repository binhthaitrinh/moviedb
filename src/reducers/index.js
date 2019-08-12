import { combineReducers } from 'redux';
import alert from './alert';
import movie from './movie';
import auth from './auth';
import ui from './ui';

export default combineReducers({ alert, movie, auth, ui });
