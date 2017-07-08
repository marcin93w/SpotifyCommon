type Song = Readonly<{
  id: number;
  name: String;
  author: String;
  album: String;
}>;

export type State = Readonly<{
  playlist: {
    songs: Song[]
  }
}>;