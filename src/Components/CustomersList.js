import React from 'react';
import Customer from './Customer';

const CustomersList = ({ contracts, customers, onDelete }) => {
  return (
    <>
      {
        customers.map(customer => {
          const customerContracts = contracts.filter((contract) => contract.customerId === customer.id)

          return (
            <Customer
              key={customer.id}
              contracts = {customerContracts}
              id={customer.id} 
              name={customer.name}
              onDelete={onDelete}
            />
          )
        })
      }
    </>
  )
};

export default CustomersList;
