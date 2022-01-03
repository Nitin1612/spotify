import {combineReducers} from 'redux';
import playSongReducer from './playSongReducer';

const rootReducer = combineReducers({
  playSongReducer,
});

export default rootReducer;
