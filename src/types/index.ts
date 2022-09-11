export interface UserType {
  name: string;
  email: string;
}

export interface NavbarType {
  user: UserType | null;
}

export interface ButtonType {
  color?: string;
  children: React.ReactNode;
  width?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
