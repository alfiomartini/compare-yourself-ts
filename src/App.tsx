import React from "react";
import "./App.css";
import { Compare } from "./components/Compare";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { UserType } from "./types";

export function App() {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <div className="container">
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
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
