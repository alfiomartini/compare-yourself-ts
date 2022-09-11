import React from "react";
import "./styles.css";
import { ButtonType } from "../../types";

let style = {};

export const Button = (props: ButtonType) => {
  const { children, width, handleClick } = props;
  style = width ? { ...style, width: width } : { ...style };

  return (
    <div>
      <button className="btn" style={style} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
