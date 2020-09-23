import React from 'react'

const Customer = (props) => {
  return (
    <div id={props.id}>
      {/* <img alt='customer' src='https://robohash.org/test' /> */}
      <li>{props.name}</li>
      <button>Delete</button>
    </div>
  )
};

export default Customer;
