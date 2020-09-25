import React from 'react';
import Contract from './Contract';

const ContractsList = ({contracts}) => {
  return (
    <> 
      {
        contracts.map(contract => {
          return (
            <Contract 
              key={contract.id}
              id={contract.id}
              name={contract.name}
            />
          )
        })
      }
    </>
  )
};

export default ContractsList;
