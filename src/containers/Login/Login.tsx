import React, { useContext, useState } from "react";
// @ts-ignore
import { Button, Form, FormInput, FormGroup } from "shards-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";
// @ts-ignore
import { Card, CardBody } from "shards-react";
import {
  LoginContainer,
  LoginCardContainer,
  WrongPasswordDiv,
  UserNotFoundDiv
} from "./LoginStyles";
import { RouterProps } from "../../utils/Interfaces/Router";

const Login = (props: RouterProps) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result.data.login);
      context.login(result.data.login);
      props.history.push("/poems");
    },
    onError(err) {
      console.log(err);
      checkForLoginErrors(err?.graphQLErrors[0]?.extensions?.exception?.errors);
      setErrors(err?.graphQLErrors[0]?.extensions?.exception?.errors);
    },
    variables: values
  });

  function checkForLoginErrors(error: any) {
    if (error?.general === "Wrong crendetials") {
      setIsWrongPassword(true);
    } else if (error?.general === "User not found") {
      setUserNotFound(true);
    }
  }

  const onChange = (e: any) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <LoginContainer>
      <LoginCardContainer>
        <Card>
          <CardBody>
            <Form
              onSubmit={onSubmit}
              noValidate
              className={loading ? "loading" : ""}
            >
              <h1>Login</h1>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput
                  id="#username"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={onChange}
                />
                {userNotFound && (
                  <UserNotFoundDiv>User not found</UserNotFoundDiv>
                )}
              </FormGroup>

              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={onChange}
                />
                {isWrongPassword && (
                  <WrongPasswordDiv>Wrong password, try again</WrongPasswordDiv>
                )}
              </FormGroup>

              <Button type="submit" outline>
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </LoginCardContainer>
    </LoginContainer>
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
