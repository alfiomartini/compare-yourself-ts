import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavbarType } from "../../types";

export const Navbar = (props: NavbarType) => {
  const { isAuthenticated } = props;

  return (
    <div className="navbar">
      {isAuthenticated && (
        <Link to="/" className="link">
          Compare You
        </Link>
      )}
      {!isAuthenticated && (
        <Link to="/signin" className="link">
          Sign In
        </Link>
      )}
      {!isAuthenticated && (
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/signout" className="link">
          Sign Out
        </Link>
      )}
    </div>
  );
};
