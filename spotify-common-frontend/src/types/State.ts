type Song = Readonly<{
  id: number;
  name: String;
  author: String;
  album: String;
}>;

export type Playlist = Readonly<{
  songs: Song[]
}>;

export type User = Readonly<{
  isSpotifyAuthStarted: boolean;
  apiToken: string;
}>;

export type State = Readonly<{
  user: User,
  playlist: Playlist
}>;