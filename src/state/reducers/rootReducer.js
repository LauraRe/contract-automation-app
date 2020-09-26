import initialState from '../store/initialState';

const rootReducer = (state = initialState, action) => {
  if (action.type === 'DELETE_CUSTOMER') {
    const newCustomersList = state.customers.filter((customer) => customer.id !== action.id);
    const newContractsList = state.contracts.filter((contract) => contract.customerId !== action.id);
    return {
      ...state,
      customers: newCustomersList,
      contracts: newContractsList
    }
  } else {
    return state
  }
}

export default rootReducer
