import React from 'react';
import Customer from './Customer';
import { connect } from 'react-redux';

const CustomersList = ({ contracts, customers, dispatch }) => {
  return (
    <>
      <h1>Customers:</h1>
      {
        customers.map(customer => {
          return (
            <Customer
              key={customer.id}
              contracts={contracts}
              id={customer.id} 
              name={customer.name}
              onDelete={() => dispatch({ type: 'DELETE_CUSTOMER', id: customer.id })}
            />
          )
        })
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
    contracts: state.contracts
  }
}

export default connect(mapStateToProps)(CustomersList)
