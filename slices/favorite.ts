import { slice } from 'killua';
import { TProduct } from '@/types/product';

export const favoriteSlice = slice({
  key: 'favorite',
  defaultClient: [] as TProduct[],
  defaultServer: [],
  selectors: {
    isInFavorites: (value, payload: number) =>
      value.some((product) => product.id === payload),
    isEmpty: (value) => value.length === 0,
  },
  reducers: {
    add: (value, payload: TProduct) => {
      return [...value, payload];
    },
    remove: (value, payload: TProduct) => [
      ...value.filter((product) => product.id !== payload.id),
    ],
  },
});
