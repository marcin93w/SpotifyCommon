import { combineReducers } from 'redux';
import { PlaylistFetchSuccess, PLAYLIST_FETCH_SUCCESS } from '../actions/playlist';

type PlaylistAction = PlaylistFetchSuccess;

function playlist(state = [], action: PlaylistAction) {
  switch (action.type) {
    case PLAYLIST_FETCH_SUCCESS:
      return {
        ...state, songs: action.playlist.songs
      };
    default: return state;
  }
}

const reducer = combineReducers({ playlist });
export default reducer;