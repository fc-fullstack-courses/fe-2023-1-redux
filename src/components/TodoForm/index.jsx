import React from 'react';
import { connect } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import * as ActionCreators from '../../redux/actions/actionCreators';
const initialState = {
  taskText: '',
};

const ToDoForm = ({ createTaskAction }) => {
  const submitHandler = (values, formikBag) => {
    createTaskAction(values.taskText);
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

const mDtP = (dispatch) => ({
  createTaskAction: (taskText) => dispatch(ActionCreators.createTask(taskText)),
});

export default connect(null, mDtP)(ToDoForm);
