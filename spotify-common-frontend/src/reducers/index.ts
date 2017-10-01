import { combineReducers } from 'redux';
import ActionCreators from '../actions';
import Action from '../types/Action';
import { Playlist, User } from '../types/State';

const initialPlaylistState = {
  songs: []
};

const initialUserState = {
  isSpotifyAuthStarted: false,
  apiToken: '',
  loginErrorMessage: ''
};

function user(state: User = initialUserState, action: Action) {
  switch (action.type) {
    case ActionCreators.SpotifyAuthStarted.type:
      return {
        ...state, isSpotifyAuthStarted: true
      };
    case ActionCreators.SpotifyAuthSuccess.type:
      return {
        ...state, apiToken: action.payload.apiToken
      }
    case ActionCreators.SpotifyAuthError.type: {
      return {
        ...state, loginErrorMessage: action.payload.errorMessage
      }
    }
    default: return state;
  }
}

function playlist(state: Playlist = initialPlaylistState, action: Action) {
  switch (action.type) {
    case ActionCreators.PlaylistFetchSuccess.type:
      return {
        ...state, songs: action.payload.playlist.songs
      };
    default: return state;
  }
}

const reducer = combineReducers({ playlist, user });
export default reducer;