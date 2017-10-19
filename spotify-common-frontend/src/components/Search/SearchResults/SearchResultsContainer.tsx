import { connect } from 'react-redux';
import SearchResultsComponent from './SearchResults';
import { State } from '../../../types/State';
import { Dispatch } from 'react-redux';

const mapStateToProps = ({search}: State) => {
  return { 
    songs: search.results
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return { };
};

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsComponent);

export default SearchResults;