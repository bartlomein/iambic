import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import PoemsList from "./containers/PoemsListContainer/PoemsListContainer";
import SinglePoemPage from "./containers/SinglePoemPage/SinglePoemPage";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [generatedPoem, setGeneratedPoem] = useState([]);

  return (
    <div>
      <AuthProvider>
        <Router>
          <Menu />
          <Route
            exact
            path="/"
            component={Home}
            setGeneratedPoem={setGeneratedPoem}
          />
          <Route exact path="/poems" component={PoemsList} />
          <Route exact path="/poems/:poemId" component={SinglePoemPage} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
