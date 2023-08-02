import React from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import * as UserActionCreators from '../../redux/actions/userActionCreators';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isMale: 'male',
};

const SignUpForm = ({createUserAction}) => {
  const submitHandler = (values, formikBag) => {
    // console.log(values);
    const newUser = {
      ...values,
      isMale : values.isMale === 'male'
    }
    createUserAction(newUser)
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <Field name='firstName' placeholder='firstName' />
        <Field name='lastName' placeholder='lastName' />
        <Field type='email' name='email' placeholder='email' />
        <Field type='password' name='password' placeholder='password' />
        <fieldset>
          <legend>Choose your gender</legend>
          <label>
            <Field type='radio' name='isMale' value='male' /> Male
          </label>
          <label>
            <Field type='radio' name='isMale' value='female' /> Female
          </label>
        </fieldset>
        <button type='submit'>Sign Up</button>
      </Form>
    </Formik>
  );
};

const mDtP = (dispatch) => ({
  createUserAction: (values) =>
    dispatch(UserActionCreators.createUserRequest(values)),
});

export default connect(null, mDtP)(SignUpForm);
