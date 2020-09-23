import React from 'react';
import Customer from './Customer';

const CustomersList = ({ customers, onDelete }) => {
  return (
    <>
      {
        customers.map(customer => {
          return (
            <Customer 
              key={customer.id}
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
