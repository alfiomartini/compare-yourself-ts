import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { poolData } from "../../utils";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";

import { TokenType } from "../../types";

export const Token = ({ user }: TokenType) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const clear = () => {
    setUsername("");
    setToken("");
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: user?.getUsername() as string,
      Pool: userPool,
    };

    console.log("userData", userData);
    const cognitoUser = new CognitoUser(userData);
    console.log("token", token);
    cognitoUser.confirmRegistration(token, true, function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        clear();
        return;
      }
      alert("Sign up successful");
      console.log("call result", result);
      clear();
    });
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="form-control">
        <label htmlFor="token">Confirmation Token</label>
        <input
          type="text"
          name="text"
          id="token"
          placeholder="token"
          value={token}
          onChange={handleToken}
        />
      </div>
      <Button width="90%" type={"submit"}>
        Submit
      </Button>
    </form>
  );
};
