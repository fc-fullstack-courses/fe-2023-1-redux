const initialState = {
  counter: 1,
  step: 1
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      const newState = {
        ...state,
        counter: state.counter + 1
      }

      return newState
    }
    case 'decrement': {

      return {
        ...state,
        counter: state.counter - 1
      }
    }
    default: return state;
  }
}

export default counterReducer;