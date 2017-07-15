import { combineReducers } from 'redux';
import ActionCreators from '../actions';
import Action from '../types/Action';
import { Playlist } from '../types/State';

const initialState = {
  songs: []
};

function playlist(state: Playlist = initialState, action: Action) {
  switch (action.type) {
    case ActionCreators.PlaylistFetchSuccess.type:
      return {
        ...state, songs: action.payload.playlist.songs
      };
    default: return state;
  }
}

const reducer = combineReducers({ playlist });
export default reducer;