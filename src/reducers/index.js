import { combineReducers } from 'redux';
import alert from './alert';
import movie from './movie';
import tv from './tv';

export default combineReducers({ alert, movie, tv });
