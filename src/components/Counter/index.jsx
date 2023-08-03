import React from 'react';
import * as ActionCreators from '../../redux/actions/actionCreators';
import { useSelector } from 'react-redux';

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

  const increment = () => {
    // incrementAction();
  };
  const decrement = () => {
    // decrementAction();
  };

  const changeStep = ({ target: { value } }) => {
    // changeStepAction(Number(value));
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
