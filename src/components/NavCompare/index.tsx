import React from "react";
import { useState } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import { Add } from "../Add";
import { Delete } from "../Delete";
import { GetSingle } from "../GetSingle";
import { GetAll } from "../GetAll";
import { Compare } from "../Compare";
import {
  NavCompareType,
  YourselfType,
  SingleType,
  CompareAllType,
} from "../../types";
import { doFetch, GET_URL, DELETE_URL } from "../../utils";
import "./styles.css";

export const NavCompare = ({ authorization, username }: NavCompareType) => {
  const [getItem, setGetItem] = useState<YourselfType | null>(null);
  const [getAll, setGetAll] = useState<YourselfType[]>([]);
  const [compareAll, setCompareAll] = useState<CompareAllType | null>(null);
  const [delItem, setDelItem] = useState("");

  const { url, path } = useRouteMatch();

  const handleGetSingle = async () => {
    try {
      const resp = await doFetch(GET_URL("single"), "GET", authorization);
      const json: SingleType = await resp.json();
      console.log(json);
      if (json.statusCode === 200) setGetItem(json.body);
      else alert(JSON.stringify(json.body));
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleGetAll = async () => {
    try {
      const resp = await doFetch(GET_URL("all"), "GET", authorization);
      const json: any = await resp.json();
      console.log(json);
      if (json.statusCode === 200) {
        setGetAll(json.body);
      } else {
        alert(JSON.stringify(json.body));
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const resp = await doFetch(DELETE_URL, "DELETE", authorization);
      const json = await resp.json();
      console.log(json);
      if (json.statusCode === 200) {
        console.log(json.body);
        setDelItem(json.body);
      } else alert(JSON.stringify(json.body));
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleCompare = async () => {
    try {
      const resp_all = await doFetch(GET_URL("all"), "GET", authorization);
      const json_all = await resp_all.json();
      const resp_single = await doFetch(
        GET_URL("single"),
        "GET",
        authorization
      );
      const json_single = await resp_single.json();
      console.log(json_all, json_single);
      setCompareAll({ users: json_all.body, currentUser: json_single.body });
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
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
          <Route path={`${path}/get-all`}>
            {<GetAll items={getAll} username={username}></GetAll>}
          </Route>
          <Route path={`${path}/delete`}>
            {delItem && <Delete message={delItem}></Delete>}
          </Route>
          <Route path={`${path}/compare-yourself`}>
            {compareAll && (
              <Compare compareAll={compareAll} username={username}></Compare>
            )}
          </Route>
        </Switch>
      </div>
    </>
  );
};
