import React from "react";
import { useState } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import { Add } from "../Add";
import { Delete } from "../Delete";
import { GetSingle } from "../GetSingle";
import { GetAll } from "../GetAll";
import { Compare } from "../Compare";
import { NavCompareType, YourselfType, SingleType } from "../../types";
import { doFetch, GET_URL } from "../../utils";
import "./styles.css";

export const NavCompare = ({ authorization, username }: NavCompareType) => {
  const [getItem, setGetItem] = useState<YourselfType | null>(null);

  const { url, path } = useRouteMatch();

  const handleGetSingle = async () => {
    try {
      const resp = await doFetch(GET_URL("single"), "GET", authorization);
      const json: SingleType = await resp.json();
      console.log(json);
      if (json.statusCode === 200) setGetItem(json.body);
      else alert(JSON.stringify(json));
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleGetAll = async () => {};

  const handleDelete = () => {
    console.log("delete");
  };
  const handleCompare = () => {
    console.log("compare yourself");
  };

  return (
    <>
      <div className="nav-compare">
        <Link to={`${url}/add`} className="btn">
          Add
        </Link>
        <Link
          to={`${url}/get-single`}
          onClick={handleGetSingle}
          className="btn"
        >
          Get Single
        </Link>
        <Link to={`${url}/get-all`} onClick={handleGetAll} className="btn">
          Get All
        </Link>
        <Link to={`${url}/delete`} onClick={handleDelete} className="btn">
          Delete
        </Link>
        <Link
          to={`${url}/compare-yourself`}
          onClick={handleCompare}
          className="btn"
        >
          Compare
        </Link>
      </div>

      <div className="nav-compare-page">
        <Switch>
          <Route path={`${path}/add`}>
            <Add authorization={authorization}></Add>
          </Route>
          <Route path={`${path}/get-single`}>
            {getItem && (
              <GetSingle item={getItem} username={username}></GetSingle>
            )}
          </Route>
          <Route path={`${path}/get-all`}>{<GetAll></GetAll>}</Route>
          <Route path={`${path}/delete`}>
            <Delete></Delete>
          </Route>
          <Route path={`${path}/compare-yourself`}>
            <Compare></Compare>
          </Route>
        </Switch>
      </div>
    </>
  );
};
