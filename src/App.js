import React from 'react';
import Login from './views/Login';
import Main from './views/Main';
import { Switch, Route } from 'react-router-dom';
import { CustomerContextProvider } from './components/context/customerContext/'
import { TicketContextProvider } from './components/context/ticketContext/'

import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <CustomerContextProvider>
            <TicketContextProvider>
            <Main />
            </TicketContextProvider>
          </CustomerContextProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
