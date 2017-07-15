import { ActionCreators as playlistActionCreators } from './playlist';
import { ActionCreators as loginActionCreators } from './login';

export default {...playlistActionCreators, ...loginActionCreators };