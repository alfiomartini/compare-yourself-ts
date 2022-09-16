import React from "react";
import { DeleteType } from "../../types";
import "./styles.css";

export const Delete = ({ message }: DeleteType) => {
  return <div className="delete">{message}</div>;
};
