import * as React from 'react';
import Song from '../Playlist/Song/SongContainer';
import { Redirect } from 'react-router-dom';
import { Panel, Table } from 'react-bootstrap';
import './Playlist.css';

interface PlaylistProperties {
  fetchPlaylist: () => void;
  songIds: number[];
  isAuthenticated: boolean;
}

class Playlist extends React.Component<PlaylistProperties, {}> {
  componentDidMount() {
    this.props.fetchPlaylist();
  }

  render() {
    const {isAuthenticated, songIds} = this.props;

    if (!isAuthenticated) {
      return (<Redirect to="/login" />);
    }

    return (
      <div className="Playlist">
        <Panel header="Currently playing queue:">
          <Table>
            <tbody>
              {songIds.map(songId => 
                <Song key={songId} id={songId} />
              )}
            </tbody>
          </Table>
        </Panel>
      </div>
    );
  }
}

export default Playlist;
