import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/slices/userSlice';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isMale: 'male',
};

const SignUpForm = ({ createUserAction }) => {
  const dispatch = useDispatch();

  const submitHandler = (values, formikBag) => {
    // console.log(values);
    const newUser = {
      ...values,
      isMale: values.isMale === 'male',
    };
    dispatch(createUser(newUser));
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

export default SignUpForm;
