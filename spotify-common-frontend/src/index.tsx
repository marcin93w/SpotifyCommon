import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { compose } from 'redux';
import { State } from './types/State';

let initialState: State = {
  user: {
    isAuthStarted: false,
    apiToken: (localStorage.getItem('userId') as string) || '',
    playlistId: (localStorage.getItem('playlistId') as string) || '',
    loginErrorMessage: ''
  },
  playlist: {
    songs: []
  },
  search: {
    query: '', 
    isRunning: false,
    error: '',
    results: []
  },
  songAdd: {
    isRunning: false,
    error: '',
    position: 0
  }
};

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const middleware = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore<State>(reducers, initialState, middleware);

store.subscribe(() => {
  localStorage.setItem('userId', store.getState().user.apiToken);
  localStorage.setItem('playlistId', store.getState().user.playlistId);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
