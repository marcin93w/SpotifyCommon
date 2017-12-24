export default {
  spotifyClientId: '3a13e0a541fa49f9b61c107a9cfd6472',
  spotifyRedirectUri: 'http://localhost:3000/#/login?',
  spotifyLoginUrl: 'https://accounts.spotify.com/authorize',
  spotifyScope: [
    'user-read-email', 
    'playlist-read-collaborative', 
    'playlist-read-private',
    'playlist-modify-private',
    'playlist-modify-public',
  ],

  apiUrl: 'http://localhost:8080/'
};