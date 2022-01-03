import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function playSongReducer(
  state = initialState.playingSong,
  action,
) {
  switch (action.type) {
    case actionTypes.PLAY_SONG:
      return action.payload;
    default:
      return state;
  }
}
