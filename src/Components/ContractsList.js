import React from 'react';
import Contract from './Contract';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-left: 1em;
  margin-right: 1em;
`

const ContractsList = ({ contracts, customerContracts }) => {
  let contractList = customerContracts || contracts
  return (
      <Wrapper> 
        {
          contractList.map(({ id, name }) => {
            return (
              <Contract 
                key={id}
                id={id}
                name={name}
              />
            )
          })
        }
      </Wrapper>
  )};

const mapStateToProps = (state) => {
  return {
    contracts: state.contracts
  }
}

export default connect(mapStateToProps)(ContractsList)
