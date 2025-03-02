import { useQuery } from '@tanstack/react-query';
import { useKillua } from 'killua';
import toast from 'react-hot-toast';
import { APIsendCartItems } from '@/actions/routes/cart/send-cart-items';
import { APIgetAuth } from '@/actions/templates/base/get-auth';
import { useUpdateQuery } from '@/hooks/update-query';
import { cartSlice } from '@/slices/cart';
import { formatPrice } from '@/utils/format-price';

export function PlaceOrder() {
  const localstorageCart = useKillua(cartSlice);
  const updateQuery = useUpdateQuery();
  const fetchAuth = useQuery({
    queryKey: ['auth'],
    queryFn: () => APIgetAuth(),
  });
  const isLoggined = Boolean(fetchAuth.data);
  const handleSendCartItems = async () => {
    const res = await APIsendCartItems({
      body: {
        items: localstorageCart.get().map((item) => ({
          productID: item._id,
          quantity: item.quantity,
        })),
      },
    });
    if (res.status === 'success') {
      toast.success(res.message);
      localstorageCart.reducers.reset();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <section className="sticky top-3 flex h-fit w-full flex-1 flex-col rounded-xl border bg-white p-4">
      {/* list cart items with quantity */}
      <div className="mb-1.5 flex flex-col gap-0.5 overflow-y-auto border-b pb-1.5">
        {localstorageCart.get().map((item) => (
          <div
            key={item._id}
            className="flex w-full items-center justify-between text-smp text-gray-500"
          >
            <div className="flex w-full items-center ">
              <p>{item.title}</p>
              <p> × {item.quantity}</p>
            </div>
            <p className="whitespace-nowrap">
              {formatPrice(Number(item.priceWithDiscount) * item.quantity)}
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
          if (isLoggined) {
            handleSendCartItems();
          } else {
            toast.error('لطفا وارد حساب کاربری خود شوید!');
            updateQuery((prev) => {
              return {
                ...prev,
                'toggle-login': true,
              };
            });
          }
        }}
        className="mt-4 w-full rounded-lg bg-teal py-3 text-center text-white"
      >
        ثبت سفارش
      </button>
    </section>
  );
}
