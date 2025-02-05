'use client';

import { useKillua } from 'killua';
import Image from 'next/image';
import Link from 'next/link';
import { Loader } from '@/components/user/loader';
import { ProductCard } from '@/components/user/product-card';
import { cartSlice } from '@/slices/user/cart';

export function CartList() {
  const localstorageCart = useKillua(cartSlice);

  return (
    <section className="container h-full">
      {localstorageCart.isReady ? (
        localstorageCart.selectors.isEmpty() ? (
          <Empty />
        ) : (
          <div className="grid gap-3 md:grid-cols-[1fr_300px]">
            <List />
            <GoToCheckout />
          </div>
        )
      ) : (
        <Loader />
      )}
    </section>
  );
}

const Empty = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <Image src="/images/waiter.svg" width={350} height={350} alt="گارسون" />
      <p className="lg:text-lg">محصولی را به سبد خرید اضافه نکرده اید!</p>
    </div>
  );
};

const List = () => {
  const localstorageCart = useKillua(cartSlice);

  return (
    <div className="grid h-fit grid-cols-1 gap-3 lg:grid-cols-2">
      {localstorageCart.get().map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};

const GoToCheckout = () => {
  const localstorageCart = useKillua(cartSlice);

  return (
    <div className="flex h-fit w-full flex-1 flex-col rounded-xl border bg-white p-4">
      {/* total price */}
      <div className="flex w-full items-center justify-between text-black">
        <p className="text-center">مجموع :</p>
        <p>
          {localstorageCart.selectors.totalPrice().toLocaleString('fa-IR')}{' '}
          تومان
        </p>
      </div>
      {/* go to checkout btn */}
      <Link
        href="/checkout"
        className="mt-4 w-full rounded-lg bg-teal py-3 text-center text-white"
      >
        ادامه جهت تسویه حساب
      </Link>
    </div>
  );
};
