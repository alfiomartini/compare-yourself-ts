import React from "react";
import "./styles.css";

interface ButtonType {
  color?: string;
  children: React.ReactNode;
  width?: string;
}

let style = {};

export const Button = (props: ButtonType) => {
  const { children, width } = props;
  style = width ? { ...style, width: width } : { ...style };

  return (
    <div>
      <button className="btn" style={style}>
        {children}
      </button>
    </div>
  );
};
