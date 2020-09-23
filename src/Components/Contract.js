import React from 'react';

const Contract = ({customer, name}) => {
    return (
      <li>
        {`${name}, customer: ${customer}`}
      </li>
    )
};

export default Contract;
