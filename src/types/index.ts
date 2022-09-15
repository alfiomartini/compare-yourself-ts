import React from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

export type stateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface UserType {
  username: string;
  email: string;
  password: string;
}

export interface PostType {
  age: number;
  height: number;
  income: number;
}

export interface NavbarType {
  isAuthenticated: boolean;
  setAuthentication: (user: CognitoUser | null) => void;
  user: CognitoUser | null;
}

export interface SignUpType {}

export interface SignInType {
  setAuthentication: (user: CognitoUser | null) => void;
}

export interface YourselfType {
  age: number;
  height: number;
  income: number;
}

export interface GetSingleType {
  item: YourselfType;
  username: string;
}

export interface SingleType {
  statusCode: number;
  body: YourselfType;
}

export interface AddType {
  authorization: string;
}

export interface NavCompareType {
  authorization: string;
  username: string;
}
export interface TokenType {}

export interface ButtonType {
  color?: string;
  children: React.ReactNode;
  width?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
