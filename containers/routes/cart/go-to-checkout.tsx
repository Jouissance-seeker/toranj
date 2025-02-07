import { useKillua } from 'killua';
import Link from 'next/link';
import { cartSlice } from '@/slices/cart';
import { formatPrice } from '@/utils/format-price';

export function GoToCheckout() {
  const localstorageCart = useKillua(cartSlice);

  return (
    <div className="sticky top-3 flex h-fit w-full flex-1 flex-col rounded-xl border bg-white p-4">
      {/* total price */}
      <div className="flex w-full items-center justify-between text-black">
        <p className="text-center">مجموع :</p>
        <p>{formatPrice(localstorageCart.selectors.totalPrice())}</p>
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
}
