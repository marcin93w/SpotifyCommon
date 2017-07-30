import { ActionCreator } from 'react-redux-typescript';
import 'whatwg-fetch';

const START_SPOTIFY_AUTH = 'START_SPOTIFY_AUTH';
const SPOTIFY_AUTH_SUCCESS = 'START_SPOTIFY_SUCCESS';
const SPOTIFY_AUTH_ERROR = 'START_SPOTIFY_ERROR';

export const ActionCreators = {
  StartSpotifyAuth: new ActionCreator<typeof START_SPOTIFY_AUTH, { accessToken: string }>(START_SPOTIFY_AUTH),
  SpotifyAuthSuccess: new ActionCreator<typeof SPOTIFY_AUTH_SUCCESS, { apiToken: String }>(SPOTIFY_AUTH_SUCCESS),
  SpotifyAuthError: new ActionCreator<typeof SPOTIFY_AUTH_ERROR, { errorMessage: String }>(SPOTIFY_AUTH_ERROR)
};
