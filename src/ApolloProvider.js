import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://iambic-backend.herokuapp.com/"
  // uri: "http://localhost:5000"
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtTokenIambic");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
