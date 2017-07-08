import * as React from 'react';
import Song from '../Song/SongContainer';

interface PlaylistProperties {
  songIds: number[];
}

class Playlist extends React.Component<PlaylistProperties, {}> {
  render() {
    const {songIds} = this.props;
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
