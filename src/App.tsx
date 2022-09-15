import React from "react";
import "./App.css";
import { NavCompare } from "./components/NavCompare";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Add } from "./components/Add";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";
import { Route, Switch } from "react-router-dom";
import { poolData } from "./utils";
import { useHistory } from "react-router-dom";

export function App() {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authorization, setAuthorization] = useState("");

  const location = useHistory();

  useEffect(() => {
    const userPool = new CognitoUserPool(poolData);
    // go to local storage
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser !== null) {
      cognitoUser.getSession((err: any, session: any) => {
        if (err) return;
        setUser(user);
        setIsAuthenticated(true);
        setAuthorization(session.getIdToken().getJwtToken());
      });
    }
  }, [user]);

  const setAuthentication = (user: CognitoUser | null) => {
    if (!user) {
      setUser(null);
      setIsAuthenticated(false);
      setAuthorization("");
      return;
    }
    user &&
      user.getSession((err: any, session: any) => {
        if (err) {
          setUser(null);
          setIsAuthenticated(false);
          setAuthorization("");
          user.signOut();
        } else {
          if (session.isValid) {
            setUser(user);
            setIsAuthenticated(true);
            setAuthorization(session.getIdToken().getJwtToken());
            location.push("/compare");
          } else setIsAuthenticated(false);
        }
      });
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
            {isAuthenticated && <NavCompare authorization={authorization} />}
            {!isAuthenticated && (
              <SignIn setAuthentication={setAuthentication} />
            )}
          </Route>
          <Route exact path="/">
            {!isAuthenticated && (
              <SignIn setAuthentication={setAuthentication} />
            )}
            {isAuthenticated && <Add authorization={authorization} />}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
