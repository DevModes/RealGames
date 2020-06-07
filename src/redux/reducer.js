import {combineReducers} from 'redux';
import {themeReducer} from './theme/reducer';
const rootreducer = combineReducers({
  themeReducer,
});
export default rootreducer;
