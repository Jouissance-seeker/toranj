export type TProduct = {
  _id: string;
  title: string;
  description: string;
  discount: number;
  image: string;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  categoryID: string;
};
