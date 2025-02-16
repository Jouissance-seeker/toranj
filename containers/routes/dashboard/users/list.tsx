'use client';

import { useQuery } from '@tanstack/react-query';
import { IoMdTrash } from 'react-icons/io';
import { APIgetUsers } from '@/actions/routes/dashboard/get-users';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';

export function List() {
  const fetchUsers = useQuery({
    queryKey: ['users'],
    queryFn: () => APIgetUsers(),
  });

  if (fetchUsers.isLoading) {
    return <Loader />;
  }

  if (fetchUsers.data?.length === 0) {
    return <Empty text="محصولی برای نمایش وجود ندارد!" />;
  }

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
                  نام
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  نام خانوادگی
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  شماره موبایل
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  ایمیل
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  آدرس
                </p>
              </th>
              <th className="border-b border-gray-200 p-4">
                <p className="block text-sm font-medium leading-none antialiased">
                  سطح دستزسی
                </p>
              </th>
              <th className="border-b border-gray-200 p-4" />
            </tr>
          </thead>
          <tbody>
            {fetchUsers.data?.map((item, index) => (
              <tr key={item._id} className="odd:bg-gray-50">
                <td className="px-4 py-1">{index + 1}</td>
                <td className="px-4 py-1">{item.name}</td>
                <td className="px-4 py-1">{item.lastName}</td>
                <td className="px-4 py-1">{item.phone}</td>
                <td className="px-4 py-1">{item.email}</td>
                <td className="px-4 py-1">{item.address}</td>
                <td className="px-4 py-1">{item.role.toLocaleLowerCase()}</td>
                <td className="px-4 py-1 text-right">
                  <button>
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
