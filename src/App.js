import React, { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';

const initialState = 1;

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {

      const newState = state + 1;

      return newState;
    }
    case 'decrement': {

      return state - 1;
    }
    default: return state;
  }
}

function App(props) {

  // const [count, setCount] = useState(1);
  const [count, dispatch] = useReducer(reducer, initialState);


  const decrement = useCallback(() => {
    const action = {
      type: 'decrement'
    }

    dispatch(action)
  }, [count]);

  const increment = () => {
    const action = {
      type: 'increment'
    }

    dispatch(action)
  };

  useEffect(function effects() {
    // componentDidMount , componentDidUpdate
    console.log('decrement changed')
    return function clearEffects() {
      // componentWillUnmount але також перед кожним componentDidUpdate (effects)
    }
  }, [decrement])

  return (
    <div>
      <p>Current count is {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
