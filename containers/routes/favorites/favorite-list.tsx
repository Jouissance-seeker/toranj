'use client';

import { useKillua } from 'killua';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { ProductCard } from '@/components/product-card';
import { favoriteSlice } from '@/slices/favorite';

export function FavoriteList() {
  const localstorageFavorite = useKillua(favoriteSlice);

  return (
    <div className="container h-full">
      {localstorageFavorite.isReady ? (
        localstorageFavorite.selectors.isEmpty() ? (
          <Empty text="محصولی را لایک نکرده اید!" />
        ) : (
          <List />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

const List = () => {
  const localstorageFavorite = useKillua(favoriteSlice);

  return (
    <div className="grid h-fit grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {localstorageFavorite.get().map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};
