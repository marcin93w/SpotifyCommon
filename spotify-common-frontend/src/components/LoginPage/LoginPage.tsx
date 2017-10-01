import * as React from 'react';
import config from '../../config';

interface LoginPageProps {
  startAuthentication: (spotifyAuthCode: string) => void;
  isSpotifyAuthStarted: boolean;
  errorMessage: string;
  isError: boolean;
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  componentDidMount() {
    const token = this.tryGetAccessToken();
    if (token) {
      this.props.startAuthentication(token);
    }
  }

  render() {
    const onLoginButtonClick = () => {
      this.redirectToSpotifyLoginWindow();
    };

    const {isError, errorMessage, isSpotifyAuthStarted} = this.props;

    return (
      <div className="LoginPanel">
        {isError &&
            <div className="error-message">{errorMessage}</div>
        }
        <button className="btn" onClick={onLoginButtonClick} disabled={isSpotifyAuthStarted}>
          Login with Spotify
        </button>
      </div>
    );
  }

  private getLoginURL(scopes: string[]): string {
    return config.spotifyLoginUrl + 
      '?client_id=' + config.spotifyClientId +
      '&redirect_uri=' + encodeURIComponent(config.spotifyRedirectUri) +
      '&scope=' + encodeURIComponent(scopes.join(' ')) +
      '&response_type=code';
  }
  
  private redirectToSpotifyLoginWindow() {
    const url = this.getLoginURL(['user-read-email', 'playlist-read-collaborative', 'playlist-read-private']);
    window.location.href = url;
  }

  private tryGetAccessToken(): string {
    let hash: {code: string} = {code: ''};

    window.location.search.replace('?', '').split('&').forEach(function(kv: string) {
      var spl = kv.indexOf('=');
      if (spl !== -1) {
        hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
      }
    });

    return hash.code;
  }
}

export default LoginPage;
