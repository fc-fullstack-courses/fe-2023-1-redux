import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../redux/slices/todoSlice';

const TodoList = ({ tasks }) => {
  const dispatch = useDispatch();
  const tasksList = tasks.map((task) => (
    <li key={task.id}>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={() =>
          dispatch(
            updateTask({ id: task.id, newValues: { isDone: !task.isDone } })
          )
        }
      />
      <span>{task.body}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete task</button>
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

export default connect(mStP)(TodoList);
