import { connect } from 'react-redux';
import SearchFormComponent from './SearchForm';
import { State } from '../../../types/State';
import { Dispatch } from 'react-redux';
import {search} from '../../../actions/search';

const mapStateToProps = ({}: State) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
      search: (query: string) => dispatch(search(query))
  };
};

const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFormComponent);

export default SearchForm;