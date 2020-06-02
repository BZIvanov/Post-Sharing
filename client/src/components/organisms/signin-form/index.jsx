import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import schema from './schema';
import formBuilder from './formBuilder';
import { CommonForm } from '../../molecules';
import { withFormStyles, Heading } from '../../atoms';
import { SIGNIN } from './gql';

const SigninForm = () => {
  const [signinUser] = useMutation(SIGNIN);

  const handleFormSubmit = (data) => {
    const { email, password } = data;
    signinUser({ variables: { email, password } }).then((data) => {
      localStorage.setItem('token', data.data.signin.token);
    });
  };

  return (
    <>
      <Heading variant="h2">Signin here</Heading>
      <CommonForm
        title="Signin form"
        buttonText="Signin"
        formBuilder={formBuilder}
        schema={schema}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default withFormStyles(SigninForm);