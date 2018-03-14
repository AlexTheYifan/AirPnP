import {combineReducers} from 'redux';
import aircrafts from './aircraftsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  aircrafts,
  ajaxCallsInProgress
});

export default rootReducer;