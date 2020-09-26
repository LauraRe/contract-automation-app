import React from 'react';
import Contract from './Contract';
import { connect } from 'react-redux';

const ContractsList = ({contracts, customerContracts}) => {
  let contractList = customerContracts || contracts
  return (
    <> 
      {
        contractList.map(contract => {
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
  )};

const mapStateToProps = (state) => {
  return {
    contracts: state.contracts
  }
}

export default connect(mapStateToProps)(ContractsList)
