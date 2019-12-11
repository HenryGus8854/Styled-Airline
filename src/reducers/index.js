import mainReducer from './flightInfo';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  flights: mainReducer,
  counter: counterReducer
});

export default allReducers;
