import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import PoemsList from "./containers/PoemsListContainer/PoemsListContainer";
import RapsList from "./containers/RapsListContainer/RapsListContainer";
import SinglePoemPage from "./containers/SinglePoemPage/SinglePoemPage";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import Menu from "./components/Menu/Menu";
import { useWindowSize } from "./utils/hooks/useWindowSize";

const App = () => {
  const [generatedPoem, setGeneratedPoem] = useState([]);

  const windowWidth = useWindowSize();

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
            windowWidth={windowWidth}
          />
          <Route
            exact
            path="/poems"
            component={PoemsList}
            windowWidth={windowWidth}
          />
          <Route
            exact
            path="/poems/:poemId"
            component={SinglePoemPage}
            windowWidth={windowWidth}
          />
          <Route
            exact
            path="/raps"
            component={RapsList}
            windowWidth={windowWidth}
          />
          {/* <Route
            exact
            path="/raps/:poemId"
            component={SinglePoemPage}
            windowWidth={windowWidth}
          /> */}
          <AuthRoute
            exact
            path="/login"
            component={Login}
            windowWidth={windowWidth}
          />
          <AuthRoute
            exact
            path="/register"
            component={Register}
            windowWidth={windowWidth}
          />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
