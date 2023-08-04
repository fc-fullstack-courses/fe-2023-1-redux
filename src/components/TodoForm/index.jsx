import React from 'react';
import { Form, Formik, Field } from 'formik';
import { createTask } from '../../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

const initialState = {
  taskText: '',
};

const ToDoForm = (props) => {
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    dispatch(createTask(values.taskText));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      <Form>
        <Field name='taskText' />
        <button type='submit'>Add task</button>
      </Form>
    </Formik>
  );
};



export default ToDoForm;
