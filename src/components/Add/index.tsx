import React from "react";
import { Button } from "../Button";
import { useState } from "react";
import { POST_URL } from "../../utils";
import { AddType } from "../../types";
import { doFetch } from "../../utils";
import { useHistory } from "react-router-dom";

export const Add = ({ authorization }: AddType) => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [income, setIncome] = useState("");

  const history = useHistory();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      age: parseInt(age),
      height: parseInt(height),
      income: parseInt(income),
    };

    try {
      const resp = await doFetch(POST_URL, "POST", authorization, body);
      const json = await resp.json();
      console.log(json);
      alert(JSON.stringify(json));
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
    clear();
    history.push("/compare");
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
