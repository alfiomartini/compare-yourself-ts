import React from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

export interface UserType {
  username: string;
  email: string;
  password: string;
}

export interface NavbarType {
  isAuthenticated: boolean;
}

export type stateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface SignUpType {
  setUser: stateAction<CognitoUser | undefined>;
  user: CognitoUser | undefined;
}

export interface TokenType {
  user: CognitoUser | undefined;
}
export interface ButtonType {
  color?: string;
  children: React.ReactNode;
  width?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
