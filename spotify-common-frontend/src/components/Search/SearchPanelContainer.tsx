import { connect } from 'react-redux';
import SearchPanelComponent from './SearchPanel';
import { State } from '../../types/State';
import { Dispatch } from 'react-redux';

const mapStateToProps = ({songAdd}: State) => {
  return { 
    isAddingSongInProgress: songAdd && songAdd.isRunning
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return { };
};

const SearchPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanelComponent);

export default SearchPanel;