'use client';

import { useKillua } from 'killua';
import { ProductCard } from '@/components/product-card';
import { cartSlice } from '@/slices/cart';

export function List() {
  const localstorageCart = useKillua(cartSlice);

  return (
    <div className="grid h-fit grid-cols-1 gap-3 lg:grid-cols-2">
      {localstorageCart.get().map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}
