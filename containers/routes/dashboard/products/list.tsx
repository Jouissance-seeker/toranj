'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { APIdeleteProduct } from '@/actions/routes/dashboard/products/delete-product';
import { APIgetProducts } from '@/actions/routes/global/get-products';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { formatPrice } from '@/utils/format-price';

export function List() {
  const fetchProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => APIgetProducts(),
  });
  const addProductToggleUrlState = useToggleUrlState('add-product');
  const handleShowModalAddProduct = () => {
    addProductToggleUrlState.show();
  };
  const editProductToggleUrlState = useToggleUrlState('edit-product');
  const handleShowModalEditProduct = (data: any) => {
    editProductToggleUrlState.show({
      title: data.title,
      description: data.description,
      priceWithDiscount: data.priceWithDiscount,
      priceWithoutDiscount: data.priceWithoutDiscount,
      category: data.category,
      id: data.id,
      image: data.image,
    });
  };

  if (fetchProducts.isLoading) {
    return <Loader />;
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
    <section className="flex size-full flex-col gap-3 overflow-hidden">
      {/* actions */}
      <button
        onClick={handleShowModalAddProduct}
        className="w-fit rounded-lg bg-teal p-2 text-smp text-white"
      >
        افزودن محصول
      </button>
      {/* table */}
      <div className="relative flex size-full h-fit flex-col overflow-auto rounded-xl border border-gray-200 bg-white bg-clip-border text-gray-600">
        {fetchProducts.data?.length !== 0 ? (
          <div>
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
                  <th />
                </tr>
              </thead>
              <tbody>
                {fetchProducts.data?.map((item, index) => (
                  <tr key={item._id} className="odd:bg-gray-50">
                    <td className="px-4 py-1">{index + 1}</td>
                    <td className="px-4 py-1 text-center">
                      <Image
                        src={`${process.env.BASE_URL}${item.image.path}`}
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
                    <td className="px-4 py-1">
                      {formatPrice(item.priceWithDiscount)}
                    </td>
                    <td className="px-4 py-1">
                      {formatPrice(item.priceWithoutDiscount)}
                    </td>
                    <td className="px-4 py-1 text-right">
                      <button
                        onClick={() =>
                          handleShowModalEditProduct({
                            title: item.title,
                            description: item.description,
                            priceWithDiscount: item.priceWithDiscount,
                            priceWithoutDiscount: item.priceWithoutDiscount,
                            category: item.categoryID,
                            id: item._id,
                            image: `${process.env.BASE_URL}${item.image.path}`,
                          })
                        }
                        className="mx-2"
                      >
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
        ) : (
          <div className="my-5">
            <Empty text="محصولی برای نمایش وجود ندارد!" />
          </div>
        )}
      </div>
    </section>
  );
}
