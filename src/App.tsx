import React from "react";
import "./App.css";
import { Compare } from "./components/Compare";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Route, Switch } from "react-router-dom";

export function App() {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authorization, setAuthorization] = useState("");

  useEffect(() => {}, []);

  const setAuthentication = (user: CognitoUser | null) => {
    if (!user) return;
    else {
      setUser(user);
      user.getSession((err: any, session: any) => {
        if (err) setIsAuthenticated(false);
        else {
          if (session.isValid) {
            setIsAuthenticated(true);
            setAuthorization(session.getIdToken().getJwtToken());
          } else setIsAuthenticated(false);
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/compare">
            {isAuthenticated && <Compare authorization={authorization} />}
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
