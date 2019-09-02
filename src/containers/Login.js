import React, { useContext, useState } from 'react';
import { Button, Form, FormInput, FormGroup } from 'shards-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../context/auth';

const Login = props => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      context.login(result.data.login);
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
    loginUser();
  };

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Login</h1>
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

        <Button type='submit' outline>
          Login
        </Button>
      </Form>
    </div>
  );
};

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
