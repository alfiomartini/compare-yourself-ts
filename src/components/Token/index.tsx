import React from "react";
import { Button } from "../Button";
import { useState } from "react";

export const Token = () => {
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
    clear();
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
      <Button width="90%">Submit</Button>
    </form>
  );
};
