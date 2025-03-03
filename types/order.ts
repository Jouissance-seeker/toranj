import { TProduct } from './product';

export type TOrder = {
  products: {
    productID: TProduct;
    quantity: 11;
  }[];
  updatedAt: string;
};
