'use client';

import { useKillua } from 'killua';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { GoToCheckout } from '@/containers/routes/cart/go-to-checkout';
import { List } from '@/containers/routes/cart/list';
import { Stepper } from '@/containers/routes/global/stepper';
import { cartSlice } from '@/slices/cart';

export default function Page() {
  const localstorageCart = useKillua(cartSlice);

  return (
    <div className="container size-full">
      {localstorageCart.isReady ? (
        localstorageCart.selectors.isEmpty() ? (
          <Empty text="محصولی را به سبد خرید اضافه نکرده اید!" />
        ) : (
          <div className="grid gap-4 md:grid-cols-[1fr_300px]">
            <Stepper step="cart" />
            <List />
            <GoToCheckout />
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}
