'use client';

import { useKillua } from 'killua';
import { ProductCard } from '@/components/product-card';
import { favoriteSlice } from '@/slices/favorite';

export function List() {
  const localstorageFavorite = useKillua(favoriteSlice);

  return (
    <section className="grid h-fit grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {localstorageFavorite.get().map((item) => (
        <ProductCard key={item._id} data={item} />
      ))}
    </section>
  );
}
