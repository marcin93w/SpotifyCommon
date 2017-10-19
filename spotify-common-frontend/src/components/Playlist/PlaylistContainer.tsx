import { connect } from 'react-redux';
import PlaylistComponent from './Playlist';
import { State } from '../../types/State';
import { Dispatch } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist';

const mapStateToProps = ({user, playlist}: State) => {
  return { 
    isAuthenticated: !!user.apiToken,
    songIds: playlist.songs !== undefined ? playlist.songs.map(song => song.id) : []
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return { fetchPlaylist: () => dispatch(fetchPlaylist()) };
};

const Playlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistComponent);

export default Playlist;