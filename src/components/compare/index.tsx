import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { POST_URL } from "../../utils";
import { CompareType } from "../../types";

export const Compare = ({ authorization }: CompareType) => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [income, setIncome] = useState("");

  const clear = () => {
    setAge("");
    setHeight("");
    setIncome("");
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };
  const handleIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("authorization", authorization);
    const body = {
      age: parseInt(age),
      height: parseInt(height),
      income: parseInt(income),
    };
    fetch(POST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error.message));
    clear();
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          placeholder=""
          name="age"
          id="age"
          value={age}
          onChange={handleAge}
        />
      </div>
      <div className="form-control">
        <label htmlFor="height">Height (cm)</label>
        <input
          type="text"
          placeholder=""
          name="height"
          id="height"
          value={height}
          onChange={handleHeight}
        />
      </div>
      <div className="form-control">
        <label htmlFor="income">Monthly Income (USD)</label>
        <input
          type="text"
          name="income"
          id="income"
          placeholder=""
          value={income}
          onChange={handleIncome}
        />
      </div>
      <Button width="90%" type={"submit"}>
        Submit
      </Button>
    </form>
  );
};
