import * as React from 'react';
import config from '../../config';

interface LoginPageProps {
  startAuthentication: (accessToken: string) => void;
  isSpotifyAuthStarted: boolean;
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

    return (
      <div className="LoginPanel">
        <button className="btn" onClick={onLoginButtonClick} disabled={this.props.isSpotifyAuthStarted}>
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
      '&response_type=token';
  }
  
  private redirectToSpotifyLoginWindow() {
    const url = this.getLoginURL(['user-read-email']);
    window.location.href = url;
  }

  private tryGetAccessToken(): string {
    let hash: {access_token: string} = {access_token: ''};
    window.location.hash.replace(/^#\/?/, '').split('&').forEach(function(kv: string) {
      var spl = kv.indexOf('=');
      if (spl !== -1) {
        hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
      }
    });

    return hash.access_token;
  }
}

export default LoginPage;
