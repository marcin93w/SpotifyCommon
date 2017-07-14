import { actionCreators } from '../actions';

type Action = typeof actionCreators[keyof typeof actionCreators];

export default Action;