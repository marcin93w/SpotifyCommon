import { connect } from 'react-redux';
import SearchResultsComponent from './SearchResults';
import { State } from '../../../types/State';
import { Dispatch } from 'react-redux';
import { addSong } from '../../../actions/add';

const mapStateToProps = ({search}: State) => {
  return { 
    songs: search.results
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return { addSong: (songId: string) => dispatch(addSong(songId)) };
};

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsComponent);

export default SearchResults;