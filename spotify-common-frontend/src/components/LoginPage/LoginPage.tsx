import * as React from 'react';
import config from '../../config';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LoginPanel.css';

interface LoginPageProps {
  startSpotifyAuthentication: (spotifyAuthCode: string) => void;
  startGuestAuthentication: (guestInviteCode: string) => void;
  isSpotifyAuthStarted: boolean;
  errorMessage: string;
  isError: boolean;
  isSpotifyAuthFinished: boolean;
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  componentDidMount() {
    const token = this.tryGetAccessToken();
    if (token.spotifyCode) {
      this.props.startSpotifyAuthentication(token.spotifyCode);
    } else if (token.guestInviteCode) {
      this.props.startGuestAuthentication(token.guestInviteCode);
    }
  }

  render() {
    const onLoginButtonClick = () => {
      this.redirectToSpotifyLoginWindow();
    };

    const {isError, errorMessage, isSpotifyAuthStarted, isSpotifyAuthFinished} = this.props;

    if (isSpotifyAuthFinished) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="LoginPanel">
        {isError &&
            <div className="error-message">{errorMessage}</div>
        }
        <Button className="btn-success" onClick={onLoginButtonClick} disabled={isSpotifyAuthStarted}>
          Login with Spotify
        </Button>
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
    const url = this.getLoginURL(config.spotifyScope);
    window.location.href = url;
  }

  private tryGetAccessToken(): {spotifyCode: string, guestInviteCode: string} {
    let hash: {code: string, invite: string} = {code: '', invite: ''};

    window.location.search.replace('?', '').split('&').forEach(function(kv: string) {
      var spl = kv.indexOf('=');
      if (spl !== -1) {
        hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
      }
    });

    return {
      spotifyCode: hash.code,
      guestInviteCode: hash.invite
    };
  }
}

export default LoginPage;
