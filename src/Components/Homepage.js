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

const linkStyle = {
  fontWeight: '400',
  textTransform: 'uppercase',
  letterSpacing: '.15em',
  color: '#E54C29',
  fontSize: '1.3rem',
  marginRight: '3em',
  textAlign: 'center'
}

const Homepage = () => {
 return (
    <Container>
      <Title>The Contract Automation Platform</Title>
      <div>
        <li>
          <Link style={linkStyle} to="/contracts">Contracts</Link>
        </li>
        <li>
          <Link style={linkStyle} to="/customers">Customers</Link>
        </li>
      </div>  
    </Container>
 )
}

export default Homepage;
