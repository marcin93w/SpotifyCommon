import * as React from 'react';
import Song from '../Song/SongContainer';
import { Redirect } from 'react-router-dom';

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
        <p>Currently playing queue:</p>
        {songIds.map(songId => 
          <Song key={songId} id={songId} />
        )}
      </div>
    );
  }
}

export default Playlist;
