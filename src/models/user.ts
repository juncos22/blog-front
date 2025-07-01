export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export type UserCredentials = Omit<
  User,
  "id" | "createdAt" | "updatedAt" | "name"
>;

export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  location: string;
  bio: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}
