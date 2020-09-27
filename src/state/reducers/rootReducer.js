import initialState from '../store/initialState';

const rootReducer = (state = initialState, action) => {
  if (action.type === 'DELETE_CUSTOMER') {
    return {
      ...state,
      customers: state.customers.filter((customer) => customer.id !== action.id),
      contracts: state.contracts.filter((contract) => contract.customerId !== action.id)
    }
  } else {
    return state
  }
}

export default rootReducer
