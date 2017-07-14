import { combineReducers } from 'redux';
import ActionCreators from '../actions';
import Action from '../types/Action';

function playlist(state = [], action: Action) {
  switch (action.type) {
    case ActionCreators.PlaylistFetchSuccess.type:
      return {
        ...state, songs: action.playlist.songs
      };
    default: return state;
  }
}

const reducer = combineReducers({ playlist });
export default reducer;