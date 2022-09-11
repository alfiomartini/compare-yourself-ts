import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import passwordValidator from "password-validator";
import ReactTooltip from "react-tooltip";

const schema = new passwordValidator();

schema.is().min(8).has().letters().has().digits();

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [toolTip, showToolTip] = useState(false);

  const clear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPwd("");
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPwd(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPwd) {
      alert("Password confirmation failed");
      clear();
      return;
    }

    const validate = schema.validate(password);
    if (!validate) {
      alert("Password must contain letter and digits. Minimum length: 8");
    }
    clear();
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
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
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
      <div className="form-control">
        <label htmlFor="confirmPwd">Confirm Password</label>
        <input
          type="password"
          name="confirmPwd"
          id="confirmPwd"
          placeholder="confirm password"
          value={confirmPwd}
          onChange={handleConfirmPwd}
        />
      </div>
      <Button width="90%">Sign Up</Button>
    </form>
  );
};
