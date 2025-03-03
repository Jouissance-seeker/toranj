'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { APIgetClientOrders } from '@/actions/routes/orders/get-client-orders';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { formatPrice } from '@/utils/format-price';

export function List() {
  const fetchClientOrders = useQuery({
    queryKey: ['client-orders'],
    queryFn: () => APIgetClientOrders(),
  });

  if (fetchClientOrders.isLoading) {
    return <Loader />;
  }

  if (fetchClientOrders.data?.length === 0) {
    return <Empty text="سفارشی برای نمایش وجود ندارد!" />;
  }

  return (
    <section className="size-full">
      <div className="relative flex size-full h-fit flex-col overflow-auto rounded-xl border border-teal/20 bg-white bg-clip-border text-gray-600">
        <table className="w-full min-w-max table-auto text-right text-sm [&_td]:px-4 [&_td]:py-1 [&_th]:border-b [&_th]:border-gray-200 [&_th]:p-4 [&_th_p]:block [&_th_p]:text-sm [&_th_p]:font-medium [&_th_p]:leading-none [&_th_p]:antialiased">
          <thead className="bg-gray-200">
            <tr>
              <th>
                <p>#</p>
              </th>
              <th>
                <p>تصویر</p>
              </th>
              <th>
                <p>عنوان</p>
              </th>
              <th>
                <p>توضیحات</p>
              </th>
              <th>
                <p>مبلغ با تخفیف</p>
              </th>
              <th>
                <p>مبلغ بدون تخفیف</p>
              </th>
              <th>
                <p>تعداد</p>
              </th>
              <th>
                <p>مبلغ نهایی</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {fetchClientOrders.data?.map((item, index) =>
              item.products.map((item) => (
                <tr key={item.productID._id} className="even:bg-gray-50">
                  <td>{index + 1}</td>
                  <td className="text-center">
                    <Image
                      src={`${process.env.BASE_URL}${item.productID.image.path}`}
                      alt={item.productID.title}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="max-w-[150px] truncate  text-right">
                    {item.productID.title}
                  </td>
                  <td className="max-w-[150px] truncate  text-right">
                    {item.productID.description}
                  </td>
                  <td>{formatPrice(item.productID.priceWithDiscount)}</td>
                  <td>{formatPrice(item.productID.priceWithoutDiscount)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {formatPrice(
                      Number(item.productID.priceWithDiscount) * item.quantity,
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
