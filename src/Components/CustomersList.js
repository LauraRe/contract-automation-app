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
        customers.map(({ id, name }) => {
          return (
            <Customer
              key={id}
              contracts={contracts}
              id={id} 
              name={name}
              onDelete={() => dispatch({ type: 'DELETE_CUSTOMER', id })}
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
