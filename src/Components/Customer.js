import React from 'react'
import ContractsList from './ContractsList';


const Customer = ({ contracts, id, name, onDelete }) => {
  const deleteCustomerAlert = (id) => {
    if (window.confirm('This action will DELETE this customer PERMANENTLY. Are you sure you want to proceed?')) {
      onDelete(id)
      alert('Customer deleted successfully.')  
    } else {
      return alert('Action cancelled by the user. No changes were made.')
    }

  }
  return (
    <>
      {/* <img alt='customer' src='https://robohash.org/test' /> */}
      <h3>{name}</h3>
      <button onClick={() => deleteCustomerAlert(id)}>Delete</button>
      <ContractsList customerContracts={contracts.filter((contract) => contract.customerId === id)} />
    </>
  )
};

export default Customer;
