import React from 'react';
import Customer from './Customer';

const CustomersList = ({ customers }) => {
  return (
    <>
      {
        customers.map(customer => {
          return (
            <Customer 
              key={customer.id} 
              name={customer.name}
            />
          )
        })
      }
    </>
  )
};

export default CustomersList;
