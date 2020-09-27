import React from 'react';
import CustomersList from './Components/CustomersList';
import ContractsList from './Components/ContractsList';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from './theme/globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/contracts">
            <h1>Contracts:</h1>
            <ContractsList />
          </Route>
          <Route path="/customers">
            <CustomersList />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
