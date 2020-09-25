import React from 'react';

const Contract = ({id, name}) => {
    return (
      <ul>
        <h4>{name}</h4>
        Contract id: #{id} 
      </ul>
    )
};

export default Contract;
