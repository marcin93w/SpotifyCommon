import { combineReducers } from 'redux';

function playlist(state = [], action: any) {
  return state;
}

const reducer = combineReducers({ playlist });
export default reducer;