import React from "react";
import { GetAllType } from "../../types";
import { GetSingle } from "../GetSingle";
import "./styles.css";

export const GetAll = ({ items, username }: GetAllType) => {
  const usersList = items.map((item, index) => (
    <GetSingle item={item} key={index} />
  ));
  return <div className="users-list">{usersList}</div>;
};
