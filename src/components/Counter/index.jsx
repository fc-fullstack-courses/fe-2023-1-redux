import React from 'react';
import * as ActionCreators from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';

const Counter = ({ counter, step, dispatch }) => {
  const decrement = () => {
    const decrementAction = ActionCreators.decrement();

    dispatch(decrementAction);
  };

  const increment = () => {
    const incrementAction = ActionCreators.increment();

    dispatch(incrementAction);
  };

  const changeStep = ({ target: { value } }) => {
    const setStepAction = ActionCreators.changeStep(Number(value));

    dispatch(setStepAction);
  };

  return (
    <div>
      <p>Current count is {counter}</p>
      <div>
        <label>
          Step is <input value={step} onChange={changeStep} />
        </label>
      </div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  step: state.counter.step,
});

export default connect(mapStateToProps)(Counter);
