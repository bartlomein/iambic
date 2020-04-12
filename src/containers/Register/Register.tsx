// @ts-ignore
import React, { useState, useContext } from "react";
// @ts-ignore
import { Button, Form, FormInput, FormGroup } from "shards-react";
import gql from "graphql-tag";
// @ts-ignore
import { Card, CardBody } from "shards-react";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";
import { RegisterContainer, RegisterCardContainer } from "./RegisterStyles";
import { RouterProps } from "../../utils/Interfaces/Router";
import { RegisterError } from "../../utils/Interfaces/RegisterError";

const Register = (props: RouterProps) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({
    duplicateUsername: false,
    passwordsDontMatch: false,
    duplicateEmail: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      setIsSubmitting(false);
      props.history.push("/login");
    },
    onError(err) {
      console.log("error");

      console.log(err);
      setIsSubmitting(false);
      checkForRegisterErrors(
        err?.graphQLErrors[0]?.extensions?.exception?.errors
      );
    },
    variables: values,
  });

  function checkForRegisterErrors(error: RegisterError) {
    if (error?.username === "This username is taken") {
      setRegisterErrors({ ...registerErrors, duplicateUsername: true });
    }
  }

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    addUser();
  };

  return (
    <RegisterContainer>
      <RegisterCardContainer>
        <Card>
          <CardBody>
            <Form
              onSubmit={onSubmit}
              noValidate
              className={loading ? "loading" : ""}
            >
              <h1>Register</h1>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput
                  id="#username"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={onChange}
                  invalid={registerErrors.duplicateUsername ? true : false}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#email">Email</label>
                <FormInput
                  type="email"
                  id="#email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  invalid={registerErrors.duplicateEmail ? true : false}
                />
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
                  invalid={registerErrors.passwordsDontMatch ? true : false}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Confirm Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={onChange}
                  invalid={registerErrors.passwordsDontMatch ? true : false}
                />
              </FormGroup>
              <Button type="submit" outline>
                Register
              </Button>
            </Form>
          </CardBody>
        </Card>
      </RegisterCardContainer>
    </RegisterContainer>
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
