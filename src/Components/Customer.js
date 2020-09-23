import React from 'react'

const Customer = ({ id, name, onDelete }) => {
  return (
    <>
      {/* <img alt='customer' src='https://robohash.org/test' /> */}
      <li>{name}</li>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  )
};

export default Customer;
