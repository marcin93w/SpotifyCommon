import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { State } from '../../types/State';
import { Dispatch } from 'redux';
import { startSpotifyAuth } from '../../actions/login';

const mapState2Props = (state: State) => {
  const errorMsg = state.user ? state.user.loginErrorMessage : '';
  return {
    isSpotifyAuthStarted: state.user ? state.user.isSpotifyAuthStarted : false,
    isError: !!errorMsg,
    errorMessage: errorMsg,
    isSpotifyAuthFinished: !!(state.user ? state.user.apiToken : '')
  };
};

const mapDispatch2Props = (dispatch: Dispatch<State>) => ({
  startAuthentication: (spotifyAuthCode: string) => dispatch(startSpotifyAuth(spotifyAuthCode))
});

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
