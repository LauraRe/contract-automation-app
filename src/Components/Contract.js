import React from 'react';
//import styled from 'styled-components';

const Contract = ({id, name}) => {
    return (
      <ul>
        <h4>{name}</h4>
        Contract id: #{id} 
      </ul>
    )
};

export default Contract;
