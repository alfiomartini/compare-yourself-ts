import React from "react";
import "./styles.css";
import { ButtonType } from "../../types";

export const Button = ({
  width = "140px",
  handleClick = () => {},
  children,
  type = "button",
}: ButtonType) => {
  const style = { width: width };

  return (
    <div>
      <button type={type} className="btn" style={style} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
