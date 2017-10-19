import { ActionCreator } from 'react-redux-typescript';
import 'whatwg-fetch';
import { State } from '../types/State';
import { Dispatch } from 'react-redux';
import config from '../config';

const START_SPOTIFY_AUTH = 'START_SPOTIFY_AUTH';
const SPOTIFY_AUTH_SUCCESS = 'START_SPOTIFY_SUCCESS';
const SPOTIFY_AUTH_ERROR = 'START_SPOTIFY_ERROR';

export const ActionCreators = {
  SpotifyAuthStarted: new ActionCreator<typeof START_SPOTIFY_AUTH, { }>(START_SPOTIFY_AUTH),
  SpotifyAuthSuccess: new ActionCreator<typeof SPOTIFY_AUTH_SUCCESS, { apiToken: String, playlistId: String }>(SPOTIFY_AUTH_SUCCESS),
  SpotifyAuthError: new ActionCreator<typeof SPOTIFY_AUTH_ERROR, { errorMessage: String }>(SPOTIFY_AUTH_ERROR)
};

export function startSpotifyAuth(spotifyAuthCode: string) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.SpotifyAuthStarted.create({}));

    fetch(`${config.apiUrl}playlist`, {
        method: "POST",
        body: JSON.stringify({code: spotifyAuthCode}),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      })
    .then(res => res.json())
    .then(data => {
      if(data.userId) {
        dispatch(ActionCreators.SpotifyAuthSuccess.create({apiToken: data.userId, playlistId: data.playlistId }));
      } else {
        dispatch(ActionCreators.SpotifyAuthError.create({
          errorMessage: "Authorization error"
        }));
      }
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.SpotifyAuthError.create({
        errorMessage: error.message ? error.message : "Authorization error"
      }));
    });
  };
}
