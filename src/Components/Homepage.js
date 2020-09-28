import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4.2rem;
  text-align: center;
  color: #147CBD;
`;

const Container = styled.div`
  margin-top: 25%;
  margin-bottom: 25%;
  margin-left: auto; 
  margin-right: auto;
`

const Homepage = () => {
 return (
    <Container>
      <Title>The Contract Automation Platform</Title>
      <Link to="/contracts">Contracts</Link>
      <Link to="/customers">Customers</Link>
    </Container>
 )
}

export default Homepage;
