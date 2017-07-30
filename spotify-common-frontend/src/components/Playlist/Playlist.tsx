import * as React from 'react';
import Song from '../Song/SongContainer';
import { Redirect } from 'react-router-dom';

interface PlaylistProperties {
  songIds: number[];
  isAuthenticated: boolean;
}

class Playlist extends React.Component<PlaylistProperties, {}> {
  render() {
    const {isAuthenticated, songIds} = this.props;

    if (!isAuthenticated) {
      return (<Redirect to="/login" />);
    }

    return (
      <div className="Playlist">
        {songIds.map(songId => 
          <Song key={songId} id={songId} />
        )}
      </div>
    );
  }
}

export default Playlist;
