import * as React from 'react';

interface LoginPageProps {
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  render() {
    return (
      <div className="LoginPanel">
        <button className="btn">Login with Spotify</button>
      </div>
    );
  }
}

export default LoginPage;
