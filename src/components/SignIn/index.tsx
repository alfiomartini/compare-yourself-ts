import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import passwordValidator from "password-validator";
import ReactTooltip from "react-tooltip";
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { poolData } from "../../utils";
import { SignInType } from "../../types";
import { useHistory } from "react-router-dom";

const schema = new passwordValidator();

schema.is().min(8).has().letters().has().digits();

export const SignIn = ({ setUser }: SignInType) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toolTip, showToolTip] = useState(false);

  const history = useHistory();

  const clear = () => {
    setUsername("");
    setPassword("");
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validate = schema.validate(password);
    if (!validate) {
      alert("Password must contain letter and digits. Minimum length: 8");
    }

    const authenticationData = {
      Username: username,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const user = userPool.getCurrentUser();
        setUser(user);
        history.push("/compare");
        clear();
      },
      onFailure: (err) => {
        alert(err.message || JSON.stringify(err));
        clear();
      },
    });
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      {toolTip && <ReactTooltip effect="solid" />}
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
        <label htmlFor="password">Password</label>
        <div className="password-block">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
          <BsFillInfoCircleFill
            className="icon-info"
            data-tip="Letter, numbers, minimum length: 8"
            onMouseOver={() => showToolTip(true)}
            onMouseOut={() => {
              showToolTip(false);
              setTimeout(() => showToolTip(true), 50);
            }}
          />
        </div>
      </div>
      <Button width="90%" type={"submit"}>
        Sign In
      </Button>
    </form>
  );
};
