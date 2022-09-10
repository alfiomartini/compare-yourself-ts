import React from "react";
import { Button } from "../Button";
import { useState } from "react";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  return (
    <form className="form-group">
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={username}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          value={email}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
        />
      </div>
      <div className="form-control">
        <label htmlFor="confirmPwd">Confirm Password</label>
        <input
          type="password"
          name="password"
          id="confirmPwd"
          placeholder="confirm password"
          value={confirmPwd}
        />
      </div>
      <Button>SignUp</Button>
    </form>
  );
};
