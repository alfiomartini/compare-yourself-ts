import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavbarType } from "../../types";

export const Navbar = ({
  isAuthenticated,
  setAuthentication,
  user,
}: NavbarType) => {
  return (
    <div className="navbar">
      <div className="logo">CY</div>
      {isAuthenticated && (
        <Link to="/compare" className="link">
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
        <Link
          to="/signin"
          className="link"
          onClick={() => {
            user && user.signOut();
            setAuthentication(null);
          }}
        >
          Sign Out
        </Link>
      )}
    </div>
  );
};
