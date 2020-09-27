import React from 'react'
import ContractsList from './ContractsList';
import styled from 'styled-components';

const Button = styled.button`
  background: #E54C29;
  color: white;
  padding: .5em 1.25em;
  border-radius: .3rem;
  font-size: .9rem;
  text-transform: uppercase;
`

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
      <h3>{name}</h3>
      <Button onClick={() => deleteCustomerAlert(id)}>Delete</Button>
      <ContractsList customerContracts={contracts.filter((contract) => contract.customerId === id)} />
    </>
  )
};

export default Customer;
