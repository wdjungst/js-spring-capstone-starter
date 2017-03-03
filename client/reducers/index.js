import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  flash
});

export default rootReducer;
