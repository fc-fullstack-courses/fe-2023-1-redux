import { legacy_createStore as createStore } from 'redux';

const initialState = {
  counter: 1,
  step: 1
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

export default store;