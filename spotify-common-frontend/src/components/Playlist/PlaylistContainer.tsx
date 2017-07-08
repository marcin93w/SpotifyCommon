import { connect } from 'react-redux';
import PlaylistComponent from './Playlist';
import { State } from '../../types/State';
import { Dispatch } from 'react-redux';

import { ActionCreators } from '../../actions/playlist';

const mapStateToProps = ({playlist}: State) => {
  return { 
    songIds: playlist.songs !== undefined ? playlist.songs.map(song => song.id) : []
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  dispatch(ActionCreators.PlaylistFetchSuccess({
    songs: [{
      id: 1,
      name: 'ads',
      author: 'das',
      album: 'gdfg'
    }, {
      id: 2,
      name: 'ds',
      author: 'cvx',
      album: 'nty'
    }]
  }));
  return {};
};

const Playlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistComponent);

export default Playlist;