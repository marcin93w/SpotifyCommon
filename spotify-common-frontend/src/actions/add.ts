import { ActionCreator } from 'react-redux-typescript';
import { Dispatch } from "react-redux";
import { State } from "../types/State";
import config from '../config';

const Add_FETCH_SUCCESS = 'Add_FETCH_SUCCESS';
const Add_FETCH_ERROR = 'Add_FETCH_ERROR';
const Add_FETCH_STARTED = 'Add_FETCH_STARTED';

export const ActionCreators = {
  AddFetchSuccess: new ActionCreator<typeof Add_FETCH_SUCCESS, {position: number}>(Add_FETCH_SUCCESS),
  AddFetchError: new ActionCreator<typeof Add_FETCH_ERROR, {errorMessage: string}>(Add_FETCH_ERROR),
  AddFetchStarted: new ActionCreator<typeof Add_FETCH_STARTED, {}>(Add_FETCH_STARTED)
};

export function addSong(songId: string) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.AddFetchStarted.create({}));
    fetch(`${config.apiUrl}playlist/tracks/${getState().user.playlistId}/${getState().user.apiToken}`, {
        method: "POST",
        body: JSON.stringify({trackId: songId}),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(ActionCreators.AddFetchSuccess.create({position: 1}));
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.AddFetchError.create({
        errorMessage: error.message ? error.message : "Error"
      }));
    });
  }
}
