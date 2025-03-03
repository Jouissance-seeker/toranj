'use client';

import { useQuery } from '@tanstack/react-query';
import { APIgetDashboardOrders } from '@/actions/routes/dashboard/orders/get-dashboard-orders';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { formatPrice } from '@/utils/format-price';

export function List() {
  const fetchClientOrders = useQuery({
    queryKey: ['dashboard-orders'],
    queryFn: () => APIgetDashboardOrders(),
  });

  if (fetchClientOrders.isLoading) {
    return <Loader />;
  }

  if (fetchClientOrders.data?.length !== 0) {
    return <Empty text="سفارشی برای نمایش وجود ندارد!" />;
  }

  return (
    <section className="size-full">
      <div className="relative flex size-full h-fit flex-col overflow-auto rounded-xl border border-gray-200 bg-white bg-clip-border text-gray-600">
        <table className="w-full min-w-max table-auto text-right text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  #
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  نام
                </p>
              </th>{' '}
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  نام خانوادگی
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  آدرس
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  محصول
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  مبلغ با تخفیف
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  مبلغ بدون تخفیف
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  تعداد
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  مبلغ نهایی
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {fetchClientOrders.data?.map((itemOrder, index) =>
              itemOrder.products.map((itemProduct) => (
                <tr key={itemProduct.productID._id} className="even:bg-gray-50">
                  <td className="px-4 py-1">{index + 1}</td>
                  <td className="px-4 py-1">{itemOrder.userID.name}</td>
                  <td className="px-4 py-1">{itemOrder.userID.lastName}</td>
                  <td className="px-4 py-1">{itemOrder.userID.address}</td>
                  <td className="max-w-[150px] truncate px-4 py-1 text-right">
                    {itemProduct.productID.title}
                  </td>
                  <td className="px-4 py-1">
                    {formatPrice(itemProduct.productID.priceWithDiscount)}
                  </td>
                  <td className="px-4 py-1">
                    {formatPrice(itemProduct.productID.priceWithoutDiscount)}
                  </td>
                  <td className="px-4 py-1">{itemProduct.quantity}</td>
                  <td className="px-4 py-1">
                    {formatPrice(
                      Number(itemProduct.productID.priceWithDiscount) *
                        itemProduct.quantity,
                    )}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
