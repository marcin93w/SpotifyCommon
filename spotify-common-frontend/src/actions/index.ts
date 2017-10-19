import { ActionCreators as playlistActionCreators } from './playlist';
import { ActionCreators as loginActionCreators } from './login';
import { ActionCreators as searchActionCreators } from './search';
import { ActionCreators as songAddActionCreators } from './add';

export default {...playlistActionCreators, ...loginActionCreators, ...searchActionCreators, ...songAddActionCreators };