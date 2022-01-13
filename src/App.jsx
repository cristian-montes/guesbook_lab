import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { ProvideAuth } from "./context/ProvideAuth";

import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import Login from "./views/Login/Login";

export default function App() {
  return (
      <ProvideAuth>
        <Router>
            <Layout>
             <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                <PrivateRoute exact path="/">
                  <Home />
                </PrivateRoute>
              </Switch>
            </Layout>
        </Router>
      </ProvideAuth>
  )
}
