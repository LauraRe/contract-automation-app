import React, { useState } from 'react';
import CustomersList from './Components/CustomersList'
import { customers } from './customers'

const App = () => {
  const [customersList, setCustomersList] = useState(customers);
 
  const handleDeleteCustomer = (id) => {
    const newCustomersList = customersList.filter((customer) => customer.id !== id);
    setCustomersList(newCustomersList);
  }

  return (
    <>
      <h1>Customers:</h1>
      <CustomersList customers={customersList} onDelete={handleDeleteCustomer} />
    </>
  )
}

export default App;
