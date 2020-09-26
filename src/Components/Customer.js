import React from 'react'
import ContractsList from './ContractsList';

const Customer = ({ contracts, id, name, onDelete }) => {
  return (
    <>
      {/* <img alt='customer' src='https://robohash.org/test' /> */}
      <h3>{name}</h3>
      <button onClick={() => onDelete(id)}>Delete</button>
      <ContractsList customerContracts={contracts.filter((contract) => contract.customerId === id)} />
    </>
  )
};

export default Customer;
