import React from 'react';
import Customer from './Customer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomersList = ({ contracts, customers, dispatch }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/contracts">Go to Contracts page</Link>
      <h2>Customers:</h2>
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
