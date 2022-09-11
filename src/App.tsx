import React from "react";
import "./App.css";
import { Compare } from "./components/compare";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";

export function App() {
  return (
    <div className="App">
      <Compare></Compare>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
