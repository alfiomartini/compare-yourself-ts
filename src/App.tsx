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

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <div className="container">
        <Switch>
          <Route path="/signin">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/compare">
            <Compare />
          </Route>
          <Route path="*">
            <SignIn setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
