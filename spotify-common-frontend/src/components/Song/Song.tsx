import * as React from 'react';

type SongProperties = Readonly<{
  id: number;
  name: String;
  artist: String;
  album: String;
  spotifyId: string;
}>;

class Song extends React.Component<SongProperties, {}> {
  render() {
    const {name, artist, album} = this.props;
    return (
      <div className="Song">
        {name};{artist};{album}
      </div>
    );
  }
}

export default Song;
