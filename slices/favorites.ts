import { slice } from 'killua';
import { TProduct } from '@/types/product';

export const favoritesSlice = slice({
  key: 'favorites',
  defaultClient: [] as TProduct[],
  defaultServer: [],
  selectors: {
    isInFavorites: (value, payload: number) =>
      value.some((product) => product.id === payload),
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
