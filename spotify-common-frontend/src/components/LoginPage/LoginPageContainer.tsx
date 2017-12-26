import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { State } from '../../types/State';
import { Dispatch } from 'redux';
import { startSpotifyAuth, startGuestAuth } from '../../actions/login';

const mapState2Props = (state: State) => {
  const errorMsg = state.user ? state.user.loginErrorMessage : '';
  return {
    isSpotifyAuthStarted: state.user ? state.user.isAuthStarted : false,
    isError: !!errorMsg,
    errorMessage: errorMsg,
    isSpotifyAuthFinished: !!(state.user ? state.user.apiToken : '')
  };
};

const mapDispatch2Props = (dispatch: Dispatch<State>) => ({
  startSpotifyAuthentication: (spotifyAuthCode: string) => dispatch(startSpotifyAuth(spotifyAuthCode)),
  startGuestAuthentication: (guestAuthCode: string) => dispatch(startGuestAuth(guestAuthCode))
});

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
