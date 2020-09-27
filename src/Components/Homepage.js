import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #147CBD;
`;

const Homepage = () => {
 return (
    <>
      <Title>The Contract Automation Platform</Title>
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
