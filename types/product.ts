export type TProduct = {
  _id: string;
  title: string;
  description: string;
  discount: number;
  image: {
    path: string;
  };
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  categoryID: string;
};
