import * as React from 'react';
import { Song } from '../../../types/State';

interface SearchResultsProperties {
  songs: Song[];
  addSong: (songId: string) => void;
}

class SearchResults extends React.Component<SearchResultsProperties, {}> {
  render() {
    const {songs, addSong} = this.props;

    return (
      <div className="SearchResults">
        {songs.map(song => 
          <div className="result-song">
            {song.name};{song.album};{song.artist}
            <button onClick={addSong.bind(this, song.spotifyId)}>Add to queue</button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
