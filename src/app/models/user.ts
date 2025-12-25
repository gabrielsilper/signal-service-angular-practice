export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  isActive: boolean;
}

export enum UserRole {
  ADMIN = 'ADMINISTRATOR',
  MANAGER = 'MANAGER',
  USER = 'USER',
}
