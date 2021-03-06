import { ActionCreator } from 'react-redux-typescript';
import { Dispatch } from 'react-redux';
import { State, Song } from '../types/State';
import config from '../config';

const ADD_FETCH_SUCCESS = 'ADD_FETCH_SUCCESS';
const ADD_FETCH_ERROR = 'ADD_FETCH_ERROR';
const ADD_FETCH_STARTED = 'ADD_FETCH_STARTED';

export const ActionCreators = {
  AddFetchSuccess: new ActionCreator<typeof ADD_FETCH_SUCCESS, {song: Song, position: number}>(ADD_FETCH_SUCCESS),
  AddFetchError: new ActionCreator<typeof ADD_FETCH_ERROR, {errorMessage: string}>(ADD_FETCH_ERROR),
  AddFetchStarted: new ActionCreator<typeof ADD_FETCH_STARTED, {}>(ADD_FETCH_STARTED)
};

export function addSong(song: Song) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.AddFetchStarted.create({}));
    fetch(`${config.apiUrl}playlist/tracks/${getState().user.playlistId}/${getState().user.apiToken}`, {
        method: 'POST',
        body: JSON.stringify({trackId: song.spotifyId}),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
    })
    .then(data => {
      dispatch(ActionCreators.AddFetchSuccess.create({song, position: 1}));
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.AddFetchError.create({
        errorMessage: error.message ? error.message : 'Error'
      }));
    });
  };
}
