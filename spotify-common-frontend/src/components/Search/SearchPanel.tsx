import * as React from 'react';
import SearchForm from './SearchForm/SearchFormContainer';
import SearchResults from './SearchResults/SearchResultsContainer';
import './SearchPanel.css';

const SearchPanel = () => (
  <div className="SearchPanel">
    <SearchForm />
    <SearchResults />
  </div>
);

export default SearchPanel;