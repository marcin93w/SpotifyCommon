import * as React from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';

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

  updateInputValue(evt: React.FormEvent<FormControl>) {
    this.setState({
      // tslint:disable-next-line:no-any
      query: (evt.currentTarget as any).value
    });
  }

  render() {
    const {query} = this.state;

    const search = () => {
      this.props.search(query);
    };

    return (
      <div id="search-form">
        <InputGroup>
          <FormControl 
            type="text" 
            placeholder="Search for songs..." 
            value={query} 
            onChange={evt => this.updateInputValue(evt)} 
          />
          <span className="input-group-btn">
            <Button onClick={search}><span className="glyphicon glyphicon-search" /></Button>
          </span>
        </InputGroup>
      </div>
    );
  }
}

export default SearchForm;
