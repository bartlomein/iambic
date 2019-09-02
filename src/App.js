import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';

const App = () => (
  <AuthProvider>
    <Router>
      <Route exact path='/' component={Home} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/register' component={Register} />
    </Router>
  </AuthProvider>
);

export default App;
