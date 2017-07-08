import Playlist from '../types/DTO/Playlist';

export const PLAYLIST_FETCH_SUCCESS = 'PLAYLIST_FETCH_SUCCESS';

export interface PlaylistFetchSuccess {
  type: typeof PLAYLIST_FETCH_SUCCESS;
  playlist: Playlist;
}

export const ActionCreators = {
  PlaylistFetchSuccess: (playlist: Playlist) => <PlaylistFetchSuccess> ({
    type: PLAYLIST_FETCH_SUCCESS,
    playlist: playlist
  })
};