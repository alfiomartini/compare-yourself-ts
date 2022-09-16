import React from "react";
import { CompareType } from "../../types";
import { GetAll } from "../GetAll";
import { GetSingle } from "../GetSingle";

export const Compare = ({ username, compareAll }: CompareType) => {
  const length = compareAll.users.length;
  const sumData = compareAll.users.reduce(
    (acc, item, index) => {
      acc.age = +acc.age + +item.age;
      acc.height = +acc.height + +item.height;
      acc.income = +acc.income + +item.income;
      return acc;
    },
    { age: 0, income: 0, height: 0 }
  );

  sumData.age = Math.ceil(sumData.age / length);
  sumData.height = Math.ceil(sumData.height / length);
  sumData.income = Math.ceil(sumData.income / length);

  const singleStyle = {
    display: "flex",
    gap: "20px",
  };
  return (
    <>
      <GetAll items={compareAll.users} />
      <div style={singleStyle}>
        <GetSingle item={sumData} username="average" />
        <GetSingle item={compareAll.currentUser} username={username} />
      </div>
    </>
  );
};
