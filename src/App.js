import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import PoemsContainer from "./containers/PoemsContainer/PoemsContainer";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import Menu from "./components/Menu/Menu";
import { Container } from "shards-react";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Container>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route exact path="/poems" component={PoemsContainer} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
          </Container>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
