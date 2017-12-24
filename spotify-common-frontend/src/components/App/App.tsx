import * as React from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import LoginPage from '../LoginPage/LoginPageContainer';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <div className="App-header">
          <h2>Spotify Common</h2>
        </div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/:code" component={LoginPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
