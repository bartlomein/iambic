import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import Menu from "./components/Menu";


import { Container} from "shards-react";


const App = () => (
  <div>
   
  <AuthProvider>
    <Router>
      <Container>

        <Menu />

        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
      </Container>
    </Router>
  </AuthProvider>
</div>
);

export default App;
