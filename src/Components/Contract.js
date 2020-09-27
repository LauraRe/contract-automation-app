import React from 'react';
import styled from 'styled-components';

const Card = styled.ul`
  border: 2px solid;
  border-radius: 5px;
  background: linear-gradient(to bottom,#147CBD 20%,#203974 100%);
  padding: 1em;
  color: white;
  `

const Contract = ({id, name}) => {
    return (
      <Card>
        <h4>{name}</h4>
        Contract id: #{id} 
      </Card>
    )
};

export default Contract;
