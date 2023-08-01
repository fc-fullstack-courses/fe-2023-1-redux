import React from 'react';
import * as ActionCreators from '../../redux/actions/actionCreators';
import { connect } from 'react-redux';

const TodoList = ({ tasks, deleteAction, updateTaskAction }) => {
  const tasksList = tasks.map((task) => (
    <li key={task.id}>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={() => updateTaskAction(task.id, { isDone: !task.isDone })}
      />
      <span>{task.body}</span>
      <button onClick={() => deleteAction(task.id)}>Delete task</button>
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
  tasks: state.task.tasks,
});

const mDtP = (dispatch) => {
  return {
    deleteAction: (id) => dispatch(ActionCreators.deleteTask(id)),
    updateTaskAction: (id, newValues) =>
      dispatch(ActionCreators.updateTask({ id, newValues })),
  };
};

export default connect(mStP, mDtP)(TodoList);
