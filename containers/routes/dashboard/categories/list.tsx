'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { MdModeEdit } from 'react-icons/md';
import { APIgetCategories } from '@/actions/routes/home/get-categories';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';

export function List() {
  const fetchCategories = useQuery({
    queryKey: ['categories'],
    queryFn: () => APIgetCategories(),
  });

  if (fetchCategories.isLoading) {
    return <Loader />;
  }

  if (fetchCategories.data?.length === 0) {
    return <Empty text="دسته بندی برای نمایش وجود ندارد!" />;
  }

  return (
    <section className="size-full">
      <div className="h-fit min-w-full overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="px-10 py-3 text-right text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-10 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                تصویر
              </th>
              <th className="px-10 py-3 text-right text-sm font-semibold uppercase tracking-wider">
                عنوان
              </th>
              <th className="w-full px-10 py-3 text-right text-sm font-semibold uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {fetchCategories.data?.map((category, index) => (
              <tr
                key={category._id}
                className={`transition-all duration-200 ease-in-out ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} `}
              >
                <td className="px-10 py-3 text-right text-sm font-medium text-gray-700">
                  {index + 1}
                </td>
                <td className="flex justify-center px-9 py-3">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={100}
                    height={100}
                  />
                </td>
                <td className="px-10 py-3 text-right text-sm text-gray-700">
                  {category.title}
                </td>
                <td className="h-full px-10 text-end text-sm text-gray-700">
                  <button>
                    <MdModeEdit size={20} />
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
