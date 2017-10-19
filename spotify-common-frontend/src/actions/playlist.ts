import Playlist from '../types/DTO/Playlist';
import { ActionCreator } from 'react-redux-typescript';
import { Dispatch } from "react-redux";
import { State } from "../types/State";
import config from '../config';

const PLAYLIST_FETCH_SUCCESS = 'PLAYLIST_FETCH_SUCCESS';
const PLAYLIST_FETCH_ERROR = 'PLAYLIST_FETCH_ERROR';
const PLAYLIST_FETCH_STARTED = 'PLAYLIST_FETCH_STARTED';

export const ActionCreators = {
  PlaylistFetchSuccess: new ActionCreator<typeof PLAYLIST_FETCH_SUCCESS, {playlist: Playlist}>(PLAYLIST_FETCH_SUCCESS),
  PlaylistFetchError: new ActionCreator<typeof PLAYLIST_FETCH_ERROR, {errorMessage: string}>(PLAYLIST_FETCH_ERROR),
  PlaylistFetchStarted: new ActionCreator<typeof PLAYLIST_FETCH_STARTED, {}>(PLAYLIST_FETCH_STARTED)
};

export function fetchPlaylist() {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.PlaylistFetchStarted.create({}));
    fetch(`${config.apiUrl}playlist`, {
      method: "POST",
      body: JSON.stringify({code: getState().user.apiToken}),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      dispatch(ActionCreators.PlaylistFetchSuccess.create({playlist: data}));
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.PlaylistFetchError.create({
        errorMessage: error.message ? error.message : "Authorization error"
      }));
    });
  }
}
