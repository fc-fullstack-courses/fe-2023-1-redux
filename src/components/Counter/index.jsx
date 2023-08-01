import React from 'react';
import * as ActionCreators from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';

const Counter = ({
  counter,
  step,
  incrementAction,
  decrementAction,
  changeStepAction,
}) => {

  const increment = () => {
    incrementAction();
  };
  const decrement = () => {
    decrementAction();
  };

  const changeStep = ({ target: { value } }) => {
    changeStepAction(Number(value));
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

const mapDispatchToProps = (dispatch) => {
  return {
    incrementAction: () => dispatch(ActionCreators.increment()),
    decrementAction: () => dispatch(ActionCreators.decrement()),
    changeStepAction: (value) => dispatch(ActionCreators.changeStep(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
