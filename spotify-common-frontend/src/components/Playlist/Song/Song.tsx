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
      <tr className="Song">
        <td><strong>{name}</strong> - {artist} - <i>{album}</i></td>
      </tr>
    );
  }
}

export default Song;
