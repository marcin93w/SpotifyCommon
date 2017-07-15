type Song = Readonly<{
  id: number;
  name: String;
  author: String;
  album: String;
}>;

export type Playlist = Readonly<{
  songs: Song[]
}>;

export type State = Readonly<{
  playlist: Playlist
}>;