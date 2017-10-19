import { connect } from 'react-redux';
import SharingInfoPanelComponent from './SharingInfoPanel';
import { State } from '../../types/State';
import { Dispatch } from 'react-redux';

const mapStateToProps = ({user}: State) => {
  return { playlistId: user.playlistId };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {};
};

const SharingInfoPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(SharingInfoPanelComponent);

export default SharingInfoPanel;