import React from 'react';
import CustomersList from './Components/CustomersList';
import ContractsList from './Components/ContractsList';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from './theme/globalStyle';
import { Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
            <Link to="/customers">Go to Customers page</Link>
            <h2>Contracts:</h2>
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
