import * as React from 'react';
import config from '../../config';

interface LoginPageProps {
  onSpotifyAuthStarted: () => void;
  isSpotifyAuthStarted: boolean;
  onSpotifyAuthSuccess: (accessCode: string) => void;
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  getLoginURL(scopes: string[]): string {
    return config.spotifyLoginUrl + 
      '?client_id=' + config.spotifyClientId +
      '&redirect_uri=' + encodeURIComponent(config.spotifyRedirectUri) +
      '&scope=' + encodeURIComponent(scopes.join(' ')) +
      '&response_type=token';
  }
  
  displaySpotifyLoginWindow(onSuccess: (accessCode: string) => void) {
    const url = this.getLoginURL(['user-read-email']);
    
    var width = 450,
      height = 730,
      left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);
    
    window.addEventListener(
      'message', 
      event => {
        var hash = JSON.parse(event.data);
        if (hash.type === 'access_token') {
          onSuccess(hash.access_token);
        }
      }, 
      false);

    const windowParams = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,' + 
                  `width=${width}, height=${height}, top=${top}, left=${left}`;
    window.open(url, 'Spotify', windowParams);
  }
  
  render() {
    const onLoginButtonClick = () => {
      this.props.onSpotifyAuthStarted();
      this.displaySpotifyLoginWindow(this.props.onSpotifyAuthSuccess);
    };

    return (
      <div className="LoginPanel">
        <button className="btn" onClick={onLoginButtonClick}>
          Login with Spotify
        </button>
      </div>
    );
  }
}

export default LoginPage;
