import React from 'react';
import * as ActionCreators from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';

const TodoList = ({ tasks, dispatch }) => {
  const tasksList = tasks.map((task) => (
    <li key={task.id}>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={() =>
          dispatch(
            ActionCreators.updateTask({
              id: task.id,
              newValues: { isDone: !task.isDone },
            })
          )
        }
      />
      <span>{task.body}</span>
      <button onClick={() => dispatch(ActionCreators.deleteTask(task.id))}>
        Delete task
      </button>
    </li>
  ));

  return (
    <div>
      <h1>Tasks</h1>
      <ul>{tasksList}</ul>
    </div>
  );
};

const mStP = (state) => ({
  tasks: state.tasks,
});

export default connect(mStP)(TodoList);
