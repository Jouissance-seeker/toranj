import { useKillua } from 'killua';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { cartSlice } from '@/slices/cart';
import { formatPrice } from '@/utils/format-price';

export function PlaceOrder() {
  const localstorageCart = useKillua(cartSlice);
  const router = useRouter();

  return (
    <section className="sticky top-3 flex h-fit w-full flex-1 flex-col rounded-xl border bg-white p-4">
      {/* list cart items with quantity */}
      <div className="mb-1.5 flex flex-col gap-0.5 overflow-y-auto border-b pb-1.5">
        {localstorageCart.get().map((item) => (
          <div
            key={item.id}
            className="flex w-full items-center justify-between text-smp text-gray-500"
          >
            <div className="flex w-full items-center ">
              <p>{item.title}</p>
              <p> × {item.quantity}</p>
            </div>
            <p className="whitespace-nowrap">
              {formatPrice(item.priceWithDiscount * item.quantity)}
            </p>
          </div>
        ))}
      </div>
      {/* total price */}
      <div className="flex w-full items-center justify-between text-black">
        <p className="text-center">مجموع :</p>
        <p>{formatPrice(localstorageCart.selectors.totalPrice())}</p>
      </div>
      {/* go to payment btn */}
      <button
        onClick={() => {
          router.push('/');
          toast.success('سفارش شما با موفقیت ثبت شد!');
          localstorageCart.reducers.reset();
        }}
        className="mt-4 w-full rounded-lg bg-teal py-3 text-center text-white"
      >
        ثبت سفارش
      </button>
    </section>
  );
}
