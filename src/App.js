import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthNav from './components/auth-nav';
import { Home, Dashboard } from './views';
import ProtectedRoute from './auth/protected-route';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthNav />
      </header>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
