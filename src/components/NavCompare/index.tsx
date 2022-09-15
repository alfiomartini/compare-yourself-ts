import React from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import { Add } from "../Add";
import { Delete } from "../Delete";
import { Get } from "../Get";
import { Yourself } from "../Yourself";
import { NavCompareType } from "../../types";
import "./styles.css";

export const NavCompare = ({ authorization }: NavCompareType) => {
  const { url, path } = useRouteMatch();

  const handleAdd = () => {
    console.log("add");
  };
  const handleGet = () => {
    console.log("get");
  };
  const handleDelete = () => {
    console.log("delete");
  };
  const handleYourself = () => {
    console.log("yourself");
  };

  return (
    <>
      <div className="nav-compare">
        <Link to={`${url}/add`} onClick={handleAdd} className="btn">
          Add
        </Link>
        <Link to={`${url}/get`} onClick={handleGet} className="btn">
          Get
        </Link>
        <Link to={`${url}/delete`} onClick={handleDelete} className="btn">
          Delete
        </Link>
        <Link to={`${url}/yourself`} onClick={handleYourself} className="btn">
          Yourself
        </Link>
      </div>

      <div className="nav-compare-page">
        <Switch>
          <Route path={`${path}/add`}>
            <Add authorization={authorization}></Add>
          </Route>
          <Route path={`${path}/get`}>
            <Get></Get>
          </Route>
          <Route path={`${path}/delete`}>
            <Delete></Delete>
          </Route>
          <Route path={`${path}/yourself`}>
            <Yourself></Yourself>
          </Route>
        </Switch>
      </div>
    </>
  );
};
