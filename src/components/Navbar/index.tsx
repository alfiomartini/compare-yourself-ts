import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavbarType } from "../../types";

export const Navbar = ({ accessToken }: NavbarType) => {
  return (
    <div className="navbar">
      <div className="logo">CY</div>
      {accessToken && (
        <Link to="/" className="link">
          Compare You
        </Link>
      )}
      {!accessToken && (
        <Link to="/signin" className="link">
          Sign In
        </Link>
      )}
      {!accessToken && (
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      )}
      {accessToken && (
        <Link to="/signout" className="link">
          Sign Out
        </Link>
      )}
    </div>
  );
};
