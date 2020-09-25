import React from 'react';
import { Link } from 'react-router-dom'

const Homepage = () => {
 return (
    <>
      <h1>The Contract Automation Platform</h1>
      <li>
        <Link to="/contracts">Contracts</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
    </>
 )
}

export default Homepage;
