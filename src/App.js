import React from 'react';
import Login from './views/Login';
import Main from './views/Main';
import { Switch, Route } from 'react-router-dom';

import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="login">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
