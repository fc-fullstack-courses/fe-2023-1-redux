import * as ActionCreators from '../actions/actionCreators';

const initialState = {
  counter: 1,
  step: 1
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionCreators.increment.type: {
      const newState = {
        ...state,
        counter: state.counter + state.step
      }

      return newState
    }
    case ActionCreators.decrement.type: {

      return {
        ...state,
        counter: state.counter - state.step
      }
    }
    case ActionCreators.changeStep.type: {

      return {
        ...state,
        step: action.payload
      }
    }
    default: return state;
  }
}

export default counterReducer;