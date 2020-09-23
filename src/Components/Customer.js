import React from 'react'

const Customer = ({ name }) => {
  return (
    <>
      {/* <img alt='customer' src='https://robohash.org/test' /> */}
      <li>{name}</li>
      <button>Delete</button>
    </>
  )
};

export default Customer;
