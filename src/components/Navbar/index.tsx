import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { NavbarType } from "../../types";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

export const Navbar = ({
  isAuthenticated,
  setAuthentication,
  user,
}: NavbarType) => {
  const [toolTip, showToolTip] = useState(false);

  return (
    <div className="navbar">
      {toolTip && <ReactTooltip place="bottom" effect="solid" />}
      <div
        className="logo"
        data-tip="Compare yourself: age, height, income"
        onMouseOver={() => showToolTip(true)}
        onMouseOut={() => {
          showToolTip(false);
          setTimeout(() => showToolTip(true), 50);
        }}
      >
        CY
      </div>
      {isAuthenticated && (
        <Link to="/compare" className="link">
          Compare
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
      {isAuthenticated && user && (
        <div className="auth-user"> {user.getUsername()}</div>
      )}
    </div>
  );
};
