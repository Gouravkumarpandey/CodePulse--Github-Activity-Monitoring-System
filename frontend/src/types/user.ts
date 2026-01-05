export interface User {
  _id: string;
  githubId: string;
  username: string;
  email?: string;
  avatar?: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}
