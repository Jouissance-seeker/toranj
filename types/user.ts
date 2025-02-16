export type TUser = {
  _id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  role: 'USER' | 'ADMIN';
};
