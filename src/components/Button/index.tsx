import React from "react";
import "./index.css";

interface ButtonType {
  color?: string;
  children: React.ReactNode;
}
export const Button = (props: ButtonType) => {
  const { children } = props;
  return (
    <div>
      <button className="btn">{children}</button>
    </div>
  );
};
