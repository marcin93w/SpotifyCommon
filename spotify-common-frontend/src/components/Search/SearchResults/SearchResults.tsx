import * as React from 'react';
import { Song } from '../../../types/State';
import { Table, Button } from 'react-bootstrap';

interface SearchResultsProperties {
  songs: Song[];
  addSong: (song: Song) => void;
}

class SearchResults extends React.Component<SearchResultsProperties, {}> {
  render() {
    const {songs, addSong} = this.props;

    return (
      <div className="SearchResults">
        <Table striped={true} bordered={true} condensed={true} hover={true}>
          <tbody>
            {songs.map(song => 
              <tr>
                <td><strong>{song.name}</strong> - {song.album} - <i>{song.artist}</i></td>
                <td><Button onClick={addSong.bind(this, song)}>
                  <span className="	glyphicon glyphicon-plus text-success" />
                </Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SearchResults;
