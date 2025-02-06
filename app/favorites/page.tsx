'use client';

import { useKillua } from 'killua';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { List } from '@/containers/routes/favorites/list';
import { favoriteSlice } from '@/slices/favorite';

export default function Page() {
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
