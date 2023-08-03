import React from 'react';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../redux/actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

const Counter = (props) => {
  // const { counter, step } = useSelector((state) => {
  //   const {
  //     counter: { counter, step },
  //   } = state;

  //   return {
  //     counter,
  //     step,
  //   };
  // });

  const { counter, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { increment, decrement, changeStep } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const incrementHandler = () => {
    increment();
  };
  const decrementHandler = () => {
    decrement();
  };

  const changeStepHandler = ({ target: { value } }) => {
    changeStep(Number(value));
  };

  return (
    <div>
      <p>Current count is {counter}</p>
      <div>
        <label>
          Step is <input value={step} onChange={changeStepHandler} />
        </label>
      </div>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   counter: state.counter.counter,
//   step: state.counter.step,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementAction: () => dispatch(ActionCreators.increment()),
//     decrementAction: () => dispatch(ActionCreators.decrement()),
//     changeStepAction: (value) => dispatch(ActionCreators.changeStep(value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
