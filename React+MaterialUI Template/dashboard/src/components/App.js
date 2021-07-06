import React from "react";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// components 

// pages

// context
import { useUserState } from "../context/UserContext";

export default function App() {

  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">afsdf</Route>
      </Switch>
    </HashRouter>
  );

  function PrivateRoute({ component, ...rest }) {
    console.log('rest', rest)
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
