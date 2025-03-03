import { TProduct } from './product';

export type TOrder = {
  products: {
    productID: TProduct;
    quantity: 11;
  }[];
  userID: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
  };
};
