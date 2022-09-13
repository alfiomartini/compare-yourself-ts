import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavbarType } from "../../types";

export const Navbar = ({ user, setUser }: NavbarType) => {
  return (
    <div className="navbar">
      <div className="logo">CY</div>
      {user && (
        <Link to="/compare" className="link">
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
        <Link
          to="/signin"
          className="link"
          onClick={() => {
            user.signOut();
            setUser(null);
          }}
        >
          Sign Out
        </Link>
      )}
    </div>
  );
};
