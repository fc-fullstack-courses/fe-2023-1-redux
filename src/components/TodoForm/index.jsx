import React from 'react';
import { connect } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import * as ActionCreators from '../../redux/actions/actionCreators';
const initialState = {
  taskText: '',
};

const ToDoForm = ({ dispatch }) => {
  const submitHandler = (values, formikBag) => {
    dispatch(ActionCreators.createTask(values.taskText));
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

export default connect()(ToDoForm);
