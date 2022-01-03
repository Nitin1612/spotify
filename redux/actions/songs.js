import * as actionTypes from './actionTypes';

export function playSong(song) {
  return {type: actionTypes.PLAY_SONG, payload: song};
}
