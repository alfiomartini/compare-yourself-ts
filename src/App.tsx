import React from "react";
import "./App.css";
import { Compare } from "./components/Compare";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

export function App() {
  const [user, setUser] = useState<CognitoUser | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />
        <div className="container">
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser} user={user} />
            </Route>
            <Route path="/">
              <Compare />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
