'use client';

import { useKillua } from 'killua';
import Image from 'next/image';
import { Loader } from '@/components/user/loader';
import { ProductCard } from '@/components/user/product-card';
import { favoriteSlice } from '@/slices/user/favorite';

export function FavoriteList() {
  const localstorageFavorite = useKillua(favoriteSlice);

  return (
    <div className="container h-full">
      {localstorageFavorite.isReady ? (
        localstorageFavorite.selectors.isEmpty() ? (
          <Empty />
        ) : (
          <List />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

const Empty = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <Image src="/images/waiter.svg" width={350} height={350} alt="گارسون" />
      <p className="lg:text-lg">محصولی را لایک نکرده اید!</p>
    </div>
  );
};

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
