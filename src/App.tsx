import React from "react";
import "./App.css";
import { Compare } from "./components/Compare";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Route, Switch } from "react-router-dom";

export function App() {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("current user", user);
  console.log("isAuthenticated", isAuthenticated);

  const setAuthentication = (user: CognitoUser | null) => {
    setUser(user);
    if (!user) setIsAuthenticated(false);
    else {
      user.getSession((err: any, session: any) => {
        if (err) setIsAuthenticated(false);
        else {
          if (session.isValid) setIsAuthenticated(true);
          else setIsAuthenticated(false);
        }
      });
    }
  };

  return (
    <div className="App">
      <Navbar
        isAuthenticated={isAuthenticated}
        setAuthentication={setAuthentication}
        user={user}
      />
      <div className="container">
        <Switch>
          <Route path="/signin">
            <SignIn setAuthentication={setAuthentication} />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/compare">
            {isAuthenticated && <Compare />}
            {!isAuthenticated && (
              <SignIn setAuthentication={setAuthentication} />
            )}
          </Route>
          <Route path="*">
            <SignIn setAuthentication={setAuthentication} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
