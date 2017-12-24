import * as React from 'react';
import SearchForm from './SearchForm/SearchFormContainer';
import SearchResults from './SearchResults/SearchResultsContainer';
import './SearchPanel.css';

interface SearchPanelProperties {
  isAddingSongInProgress: boolean;
}

class SearchPanel extends React.Component<SearchPanelProperties, {}> {
  render() {
    const {isAddingSongInProgress} = this.props;

    return (
      <div className="SearchPanel">
        <div className={(isAddingSongInProgress ? 'loading' : '')}>
          <SearchForm />
          <SearchResults />
        </div>
        {isAddingSongInProgress && 
          (<div className="LoadingPanel">
            <span className="	glyphicon glyphicon-refresh glyphicon-spin lead" />
          </div>)}
      </div>
    );
  }
}

export default SearchPanel;