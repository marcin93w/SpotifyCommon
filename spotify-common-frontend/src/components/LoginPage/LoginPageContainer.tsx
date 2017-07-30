import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { State } from '../../types/State';
import { Dispatch } from 'redux';
import ActionCreators from '../../actions';

const mapState2Props = (state: State) => {
  return {
    isSpotifyAuthStarted: state.user ? state.user.isSpotifyAuthStarted : false
  };
};

const mapDispatch2Props = (dispatch: Dispatch<State>) => ({
  startAuthentication: (accessToken: string) => { 
    dispatch(ActionCreators.StartSpotifyAuth.create({ accessToken })); },
  onSpotifyAuthSuccess: (apiToken: string) => {
    dispatch(ActionCreators.SpotifyAuthSuccess.create({ apiToken }));
  }
});

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
