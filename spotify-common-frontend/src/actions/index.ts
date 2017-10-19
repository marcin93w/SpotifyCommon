import { ActionCreators as playlistActionCreators } from './playlist';
import { ActionCreators as loginActionCreators } from './login';
import { ActionCreators as searchActionCreators } from './search';

export default {...playlistActionCreators, ...loginActionCreators, ...searchActionCreators };