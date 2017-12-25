import { connect } from 'react-redux';
import SearchResultsComponent from './SearchResults';
import { State, Song } from '../../../types/State';
import { Dispatch } from 'react-redux';
import { addSong } from '../../../actions/add';

const mapStateToProps = ({search}: State) => {
  return { 
    songs: search.results
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return { addSong: (song: Song) => dispatch(addSong(song)) };
};

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsComponent);

export default SearchResults;