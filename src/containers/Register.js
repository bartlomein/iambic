import React, { useState } from 'react';
import { Button, Form, FormInput, FormGroup } from 'shards-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const Register = props => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
      props.history.push('/');
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });
  const onChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    addUser();
  };

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Register</h1>
        <FormGroup>
          <label htmlFor='#username'>Username</label>
          <FormInput
            id='#username'
            placeholder='Username'
            name='username'
            value={values.username}
            onChange={onChange}
            invalid={errors.username ? true : false}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='#email'>Email</label>
          <FormInput
            type='email'
            id='#email'
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={onChange}
            invalid={errors.email ? true : false}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='#password'>Password</label>
          <FormInput
            type='password'
            id='#password'
            placeholder='Password'
            name='password'
            value={values.password}
            onChange={onChange}
            invalid={errors.confirmPassword ? true : false}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='#password'>Confirm Password</label>
          <FormInput
            type='password'
            id='#password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={values.confirmPassword}
            onChange={onChange}
            invalid={errors.confirmPassword ? true : false}
          />
        </FormGroup>
        <Button type='submit' outline>
          Register
        </Button>
      </Form>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
