import { slice } from 'killua';
import { TProduct } from '@/types/product';

export const cartSlice = slice({
  key: 'cart',
  defaultClient: [] as (TProduct & { quantity: number })[],
  defaultServer: [],
  selectors: {
    isEmpty: (value) => Boolean(!value.length),
    isInCart: (value, payload: TProduct) =>
      value.some((product) => product.id === payload.id),
    isOne: (value, payload: TProduct) =>
      value.find((product) => product.id === payload.id)?.quantity === 1,
    totalPrice: (value) =>
      value.reduce(
        (acc, product) => acc + product.priceWithDiscount * product.quantity,
        0,
      ),
    quantity: (value, payload: TProduct) => {
      const product = value.find((product) => product.id === payload.id);
      return product?.quantity ?? 0;
    },
  },
  reducers: {
    add: (value, payload: TProduct) => {
      const isProductInCart = value.some(
        (product) => product.id === payload.id,
      );
      if (isProductInCart) {
        return value.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      }
      return [...value, { ...payload, quantity: 1 }];
    },
    remove: (value, payload: TProduct) => [
      ...value.filter((product) => product.id !== payload.id),
    ],
    increment: (value, payload: TProduct) => {
      return value.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
    },
    decrement: (value, payload: TProduct) => {
      return value.map((product) =>
        product.id === payload.id
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product,
      );
    },
  },
});
