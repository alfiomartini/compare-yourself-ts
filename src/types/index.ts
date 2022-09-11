export interface UserType {
  name: string;
  email: string;
}

export interface NavbarType {
  user: UserType | null;
}
