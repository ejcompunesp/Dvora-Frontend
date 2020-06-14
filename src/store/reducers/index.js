import { combineReducers } from 'redux';

import je from './je';
import member from './member';
import duty from './duty'

export default combineReducers({
  je,
  member,
  duty,
});