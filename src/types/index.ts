import React from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

export type stateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface UserType {
  username: string;
  email: string;
  password: string;
}

export interface NavbarType {
  user: CognitoUser | null;
  setUser: stateAction<CognitoUser | null>;
}

export interface SignUpType {}

export interface SignInType {
  setUser: stateAction<CognitoUser | null>;
}

export interface TokenType {}
export interface ButtonType {
  color?: string;
  children: React.ReactNode;
  width?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
