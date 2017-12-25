import { combineReducers } from 'redux';
import ActionCreators from '../actions';
import Action from '../types/Action';
import { Playlist, User, State, SearchData, SongAddData, Song } from '../types/State';

const initialPlaylistState = {
  songs: []
};

const initialUserState = {
  isSpotifyAuthStarted: false,
  apiToken: '',
  playlistId: '',
  loginErrorMessage: ''
};

const initialSearchState = {
  query: '', 
  isRunning: false,
  error: '',
  results: []
};

const initialSongAddState = {
  isRunning: false,
  error: '',
  position: 0
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
      };
    case ActionCreators.SpotifyAuthError.type: {
      return {
        ...state, loginErrorMessage: action.payload.errorMessage
      };
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
    case ActionCreators.AddFetchSuccess.type:
      const newSong: Song = { ...action.payload.song, id: state.songs.length };
      return {
        ...state, songs: state.songs.concat([newSong])
      };
    default: return state;
  }
}

function search(state: SearchData = initialSearchState, action: Action) {
  switch (action.type) {
    case ActionCreators.SearchFetchSuccess.type:
      return {
        ...state, 
        isRunning: false, 
        results: action.payload.results.map((song, id) => ({...song, id, spotifyId: song.id}))
      };
    case ActionCreators.SearchFetchStarted.type:
      return {
        ...state, isRunning: true, query: action.payload.query
      };
    case ActionCreators.SearchFetchError.type:
      return {
        ...state, isRunning: false, error: action.payload.errorMessage
      };
    default: return state;
  }
}

function songAdd(state: SongAddData = initialSongAddState, action: Action) {
  switch (action.type) {
    case ActionCreators.AddFetchSuccess.type:
      return {
        ...state, isRunning: false, position: action.payload.position
      };
    case ActionCreators.AddFetchStarted.type:
      return {
        ...state, isRunning: true
      };
    case ActionCreators.AddFetchError.type:
      return {
        ...state, isRunning: false, error: action.payload.errorMessage
      };
    default: return state;
  }
}

const reducer = combineReducers<State>({ playlist, user, search, songAdd });
export default reducer;