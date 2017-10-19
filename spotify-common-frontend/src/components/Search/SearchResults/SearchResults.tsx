import * as React from 'react';
import { Song } from '../../../types/State';

interface SearchResultsProperties {
  songs: Song[];
}

class SearchResults extends React.Component<SearchResultsProperties, {}> {
  render() {
    const {songs} = this.props;

    return (
      <div className="SearchResults">
        <p>Results:</p>
        {songs.map(song => 
          <div className="result-song">
            {song.name};{song.album};{song.artist}
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
