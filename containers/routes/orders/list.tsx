'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { APIgetOrders } from '@/actions/routes/orders/get-orders';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { formatPrice } from '@/utils/format-price';

export function List() {
  const fetchClientOrders = useQuery({
    queryKey: ['client-orders'],
    queryFn: () => APIgetOrders(),
  });

  if (fetchClientOrders.isLoading) {
    return <Loader />;
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
                  تصویر
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  عنوان
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  توضیحات
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
            {fetchClientOrders.data?.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-4">
                  <Empty text="محصولی برای نمایش وجود ندارد!" />
                </td>
              </tr>
            ) : (
              fetchClientOrders.data?.map((item, index) =>
                item.products.map((item) => (
                  <tr key={item.productID._id} className="even:bg-gray-50">
                    <td className="px-4 py-1">{index + 1}</td>
                    <td className="px-4 py-1 text-center">
                      <Image
                        src={`${process.env.BASE_URL}${item.productID.image.path}`}
                        alt={item.productID.title}
                        width={50}
                        height={50}
                      />
                    </td>
                    <td className="max-w-[150px] truncate px-4 py-1 text-right">
                      {item.productID.title}
                    </td>
                    <td className="max-w-[150px] truncate px-4 py-1 text-right">
                      {item.productID.description}
                    </td>
                    <td className="px-4 py-1">
                      {formatPrice(item.productID.priceWithDiscount)}
                    </td>
                    <td className="px-4 py-1">
                      {formatPrice(item.productID.priceWithoutDiscount)}
                    </td>
                    <td className="px-4 py-1">{item.quantity}</td>
                    <td className="px-4 py-1">
                      {formatPrice(
                        Number(item.productID.priceWithDiscount) *
                          item.quantity,
                      )}
                    </td>
                  </tr>
                )),
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
