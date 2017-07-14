import Playlist from '../types/DTO/Playlist';
import { ActionCreator } from 'react-redux-typescript';

const PLAYLIST_FETCH_SUCCESS = 'PLAYLIST_FETCH_SUCCESS';

export const ActionCreators = {
  PlaylistFetchSuccess: new ActionCreator<typeof PLAYLIST_FETCH_SUCCESS, {playlist: playlist}>(PLAYLIST_FETCH_SUCCESS)
};
