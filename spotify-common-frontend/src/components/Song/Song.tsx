import * as React from 'react';

type SongProperties = Readonly<{
  id: number;
  name: String;
  author: String;
  album: String;
}>;

class Song extends React.Component<SongProperties, {}> {
  render() {
    const {name, author, album} = this.props;
    return (
      <div className="Song">
        {name};{author};{album}
      </div>
    );
  }
}

export default Song;
