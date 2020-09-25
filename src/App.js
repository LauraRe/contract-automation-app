import React, { useState } from 'react';
import CustomersList from './Components/CustomersList';
import { customers } from './customers';
import ContractsList from './Components/ContractsList';
import { contracts } from './contracts';

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
    <>
      <h1>Customers:</h1>
      <CustomersList contracts={contractsList} customers={customersList} onDelete={handleDeleteCustomer} />
      <h1>Contracts:</h1>
      <ContractsList contracts={contractsList} />
    </>
  )
}

export default App;
