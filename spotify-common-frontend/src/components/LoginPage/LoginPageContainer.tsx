import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { State } from '../../types/State';
import { Dispatch } from 'redux';

export interface LoginPageProps {
}

const mapState2Props = (state: State, ownProps: LoginPageProps) => {
  return {
  };
};

const mapDispatch2Props = (dispatch: Dispatch<State>) => ({

});

export default connect(mapState2Props, mapDispatch2Props)(LoginPage);
