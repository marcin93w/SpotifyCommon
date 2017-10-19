import { combineReducers } from 'redux';
import ActionCreators from '../actions';
import Action from '../types/Action';
import { Playlist, User, State } from '../types/State';

const initialPlaylistState = {
  songs: []
};

const initialUserState = {
  isSpotifyAuthStarted: false,
  apiToken: '',
  playlistId: '',
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
        ...state, apiToken: action.payload.apiToken, playlistId: action.payload.playlistId
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
        ...state, songs: action.payload.playlist.map((song, id) => ({ ...song, id }))
      };
    default: return state;
  }
}

const reducer = combineReducers<State>({ playlist, user });
export default reducer;