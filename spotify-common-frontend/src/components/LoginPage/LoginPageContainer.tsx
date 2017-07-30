import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { State } from '../../types/State';
import { Dispatch } from 'redux';
import { startSpotifyAuth } from '../../actions/login';

const mapState2Props = (state: State) => {
  return {
    isSpotifyAuthStarted: state.user ? state.user.isSpotifyAuthStarted : false
  };
};

const mapDispatch2Props = (dispatch: Dispatch<State>) => ({
  startAuthentication: (accesToken: string) => dispatch(startSpotifyAuth(accesToken))
});

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
