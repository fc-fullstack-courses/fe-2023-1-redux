import React from 'react';
import { Field, Form, Formik } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: 'male',
};

const SignUpForm = (props) => {
  const submitHandler = (values, formikBag) => {
    // console.log(values);
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
            <Field type='radio' name='gender' value='male' /> Male
          </label>
          <label>
            <Field type='radio' name='gender' value='female' /> Female
          </label>
        </fieldset>
        <button type='submit'>Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
