import React from "react";
import { GetSingleType } from "../../types";
import "./styles.css";

export const GetSingle = ({ item, username }: GetSingleType) => {
  return (
    <div className="yourself-data">
      <div className="username">{username}</div>
      <div className="yourself-item">
        <span className="name">age</span>
        <span className="value">{item.age} years</span>
      </div>
      <div className="yourself-item">
        <span className="name">height</span>
        <span className="value">{item.height} cm</span>
      </div>
      <div className="yourself-item">
        <span className="name">income</span>
        <span className="value">U$ {item.income}</span>
      </div>
    </div>
  );
};
