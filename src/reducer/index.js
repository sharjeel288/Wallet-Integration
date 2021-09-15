import { combineReducers } from 'redux';
import load from './load';
import balance from './balance';
import alert from './Alert';

export default combineReducers({
  load,
  balance,
  alert,
});
