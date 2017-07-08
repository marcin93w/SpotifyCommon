import { connect } from 'react-redux';
import SongComponent from './Song';
import { State } from '../../types/State';
import { Dispatch } from 'react-redux';

interface OwnProps {
  id: number;
}

const mapStateToProps = ({playlist}: State, ownProps: OwnProps) => {
  return playlist.songs.find(song => song.id === ownProps.id);
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {};
};

const Song = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongComponent);

export default Song;