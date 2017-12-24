import * as React from 'react';

interface SearchFormOwnProps {
  query: string;
}

interface SearchFormProperties {
  search: (query: string) => void;
}

class SearchForm extends React.Component<SearchFormProperties, SearchFormOwnProps> {
  constructor(props: SearchFormProperties) {
      super(props);
      this.state = {
        query: ''
      };
  }

  updateInputValue(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    const {query} = this.state;

    const search = () => {
      this.props.search(query);
    };

    return (
      <div id="search-form">
        <input 
          type="text" 
          placeholder="Search for songs..." 
          value={query} 
          onChange={evt => this.updateInputValue(evt)} 
        />
        <button onClick={search}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
