import React, {Fragment} from 'react';
// Redirect
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {view as Login} from './login';
import Home from './pages';
import config from './configs/config';
import PrivateRoute from './privateRoute';

const {isLogin, isRedirect} = config;

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={isRedirect ? () => <Redirect to={isLogin ? '/login' : `/home/browser`} /> : null}
          />
          {isLogin && <Route path="/login" component={Login} />}
          {isLogin ? <PrivateRoute path="/home" component={Home} /> : <Route path="/home" component={Home} />}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
