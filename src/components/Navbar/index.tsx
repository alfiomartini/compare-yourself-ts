import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavbarType } from "../../types";

export const Navbar = (props: NavbarType) => {
  const { user } = props;

  return (
    <div className="navbar">
      {user && (
        <Link to="/" className="link">
          Compare You
        </Link>
      )}
      {!user && (
        <Link to="/signin" className="link">
          Sign In
        </Link>
      )}
      {!user && (
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      )}
      {user && (
        <Link to="/signout" className="link">
          Sign Out
        </Link>
      )}
    </div>
  );
};
