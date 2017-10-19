export type Song = Readonly<{
  id: number;
  name: String;
  artist: String;
  album: String;
}>;

export type Playlist = Readonly<{
  songs: Song[]
}>;

export type User = Readonly<{
  isSpotifyAuthStarted: boolean;
  apiToken: string;
  playlistId: string;
  loginErrorMessage: string;
}>;

export type SearchData = Readonly<{
  query: string,
  isRunning: boolean,
  error: string,
  results: Song[]
}>;

export type State = Readonly<{
  user: User,
  playlist: Playlist,
  search: SearchData
}>;