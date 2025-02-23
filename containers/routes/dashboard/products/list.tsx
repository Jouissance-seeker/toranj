'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { IoMdTrash } from 'react-icons/io';
import { IoBagAdd } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { APIdeleteProduct } from '@/actions/routes/dashboard/products/delete-product';
import { APIgetProducts } from '@/actions/routes/dashboard/products/get-products';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { formatPrice } from '@/utils/format-price';

export function List() {
  const fetchProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => APIgetProducts(),
  });

  if (fetchProducts.isLoading) {
    return <Loader />;
  }

  if (fetchProducts.data?.length === 0) {
    return <Empty text="محصولی برای نمایش وجود ندارد!" />;
  }

  const handleDeleteProduct = async (id: string) => {
    const res = await APIdeleteProduct({
      path: {
        id,
      },
    });
    if (res.status === 'success') {
      fetchProducts.refetch();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <section className="size-full overflow-hidden">
      <div className="overflow-x-auto rounded-xl border border-gray-200">
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
                  تخفیف
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
              <th className="border-b border-gray-200 p-3">
                <button>
                  <IoBagAdd size={22} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {fetchProducts.data?.map((item, index) => (
              <tr key={item._id} className="odd:bg-gray-50">
                <td className="px-4 py-1">{index + 1}</td>
                <td className="px-4 py-1 text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </td>
                <td className="max-w-[150px] truncate px-4 py-1 text-right">
                  {item.title}
                </td>
                <td className="max-w-[200px] truncate px-4 py-1 text-right">
                  {item.description}
                </td>
                <td className="px-4 py-1">{item.discount}</td>
                <td className="px-4 py-1">
                  {formatPrice(item.priceWithDiscount)}
                </td>
                <td className="px-4 py-1">
                  {formatPrice(item.priceWithoutDiscount)}
                </td>
                <td className="px-4 py-1 text-right">
                  <button className="mx-2">
                    <MdEdit size={22} />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(item._id)}
                    className="mx-2"
                  >
                    <IoMdTrash size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
