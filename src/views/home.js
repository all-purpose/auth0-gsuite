import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../components/login-button';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <React.Fragment>
      <h1>Home</h1>
      { isAuthenticated ? '' : (
        <React.Fragment>
          <p>Please login</p>
          <LoginButton />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Home;