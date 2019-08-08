import { combineReducers } from 'redux';
import alert from './alert';
import movie from './movie';
import tv from './tv';
import auth from './auth';
import ui from './ui';

export default combineReducers({ alert, movie, tv, auth, ui });
