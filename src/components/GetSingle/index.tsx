import React from "react";
import { GetType } from "../../types";
import "./styles.css";

export const GetSingle = ({ item }: GetType) => {
  return (
    <div className="yourself-data">
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
