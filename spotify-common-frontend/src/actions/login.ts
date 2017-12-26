import { ActionCreator } from 'react-redux-typescript';
import 'whatwg-fetch';
import { State } from '../types/State';
import { Dispatch } from 'react-redux';
import config from '../config';

const START_SPOTIFY_AUTH = 'START_SPOTIFY_AUTH';
const SPOTIFY_AUTH_SUCCESS = 'SPOTIFY_AUTH_SUCCESS';
const SPOTIFY_AUTH_ERROR = 'SPOTIFY_AUTH_ERROR';

const START_GUEST_AUTH = 'START_GUEST_AUTH';
const GUEST_AUTH_SUCCESS = 'GUEST_AUTH_SUCCESS';
const GUEST_AUTH_ERROR = 'GUEST_AUth_ERROR';

export const ActionCreators = {
  SpotifyAuthStarted: new ActionCreator<typeof START_SPOTIFY_AUTH, { }>(START_SPOTIFY_AUTH),
  SpotifyAuthSuccess:
   new ActionCreator<typeof SPOTIFY_AUTH_SUCCESS, { apiToken: String, playlistId: String }>(SPOTIFY_AUTH_SUCCESS),
  SpotifyAuthError: new ActionCreator<typeof SPOTIFY_AUTH_ERROR, { errorMessage: String }>(SPOTIFY_AUTH_ERROR),
  GuestAuthStarted: new ActionCreator<typeof START_GUEST_AUTH, { }>(START_GUEST_AUTH),
  GuestAuthSuccess:
   new ActionCreator<typeof GUEST_AUTH_SUCCESS, { apiToken: String, playlistId: String }>(GUEST_AUTH_SUCCESS),
  GuestAuthError: new ActionCreator<typeof GUEST_AUTH_ERROR, { errorMessage: String }>(GUEST_AUTH_ERROR),
};

export function startSpotifyAuth(spotifyAuthCode: string) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.SpotifyAuthStarted.create({}));

    fetch(`${config.apiUrl}playlist`, {
        method: 'POST',
        body: JSON.stringify({code: spotifyAuthCode}),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      })
    .then(res => res.json())
    .then(data => {
      if (data.userId) {
        dispatch(ActionCreators.SpotifyAuthSuccess.create({apiToken: data.userId, playlistId: data.playlistId }));
      } else {
        dispatch(ActionCreators.SpotifyAuthError.create({
          errorMessage: 'Authorization error'
        }));
      }
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.SpotifyAuthError.create({
        errorMessage: error.message ? error.message : 'Authorization error'
      }));
    });
  };
}

export function startGuestAuth(loginToken: string) {
  return (dispatch: Dispatch<State>, getState: () => State) => {
    dispatch(ActionCreators.GuestAuthStarted.create({}));

    fetch(`${config.apiUrl}TODO`, {
        method: 'POST',
        body: JSON.stringify({token: loginToken}),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      })
    .then(res => res.json())
    .then(data => {
      if (data.userId) {
        dispatch(ActionCreators.GuestAuthSuccess.create({apiToken: data.userId, playlistId: data.playlistId }));
      } else {
        dispatch(ActionCreators.GuestAuthError.create({
          errorMessage: 'Authorization error'
        }));
      }
    })
    .catch((error: Error) => {
      dispatch(ActionCreators.GuestAuthError.create({
        errorMessage: error.message ? error.message : 'Authorization error'
      }));
    });
  };
}