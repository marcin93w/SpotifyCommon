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
  onSpotifyAuthStarted: () => { dispatch(ActionCreators.StartSpotifyAuth.create({})); },
  onSpotifyAuthSuccess: (accessCode: string) => {
    dispatch(ActionCreators.SpotifyAuthSuccess.create({ accessCode: accessCode }));
  }
});

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
