import React, { useState } from 'react';
import CustomersList from './Components/CustomersList';
import { customers } from './customers';
import ContractsList from './Components/ContractsList';
import { contracts } from './contracts';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [customersList, setCustomersList] = useState(customers);
  const [contractsList, setContractsList] = useState(contracts);
 
  const handleDeleteCustomer = (id) => {
    const newCustomersList = customersList.filter((customer) => customer.id !== id);
    setCustomersList(newCustomersList);
    handleContracts(id)
  }

  const handleContracts = (customerId) => {
    const newContractsList = contractsList.filter((contract) => contract.customerId !== customerId);
    setContractsList(newContractsList);
  }

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/contracts">
            <ContractsList contracts={contractsList} />
          </Route>
          <Route path="/customers">
            <CustomersList 
              contracts={contractsList} 
              customers={customersList} 
              onDelete={handleDeleteCustomer} 
            />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
