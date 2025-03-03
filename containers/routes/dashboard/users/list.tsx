'use client';

import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { IoMdTrash } from 'react-icons/io';
import { APIchangeUserRole } from '@/actions/routes/dashboard/users/change-user-role';
import { APIdeleteUser } from '@/actions/routes/dashboard/users/delete-user';
import { APIgetUsers } from '@/actions/routes/dashboard/users/get-users';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { cn } from '@/utils/cn';

export function List() {
  const fetchUsers = useQuery({
    queryKey: ['users'],
    queryFn: () => APIgetUsers(),
  });

  if (fetchUsers.isLoading) {
    return <Loader />;
  }

  if (fetchUsers.data?.length === 0) {
    return <Empty text="کاربری برای نمایش وجود ندارد!" />;
  }

  const handleDeleteUser = async (id: string) => {
    const res = await APIdeleteUser({
      path: {
        id,
      },
    });
    if (res.status === 'success') {
      fetchUsers.refetch();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const handleChangeUserRole = async (params: { id: string; role: string }) => {
    const res = await APIchangeUserRole({
      path: {
        id: params.id,
      },
      body: {
        role: params.role.toUpperCase() as 'USER' | 'ADMIN',
      },
    });
    if (res.status === 'success') {
      fetchUsers.refetch();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <section className="size-full overflow-hidden">
      <div className="overflow-x-auto rounded-xl border border-teal/20">
        <table className="w-full min-w-max table-auto text-right text-sm [&_td]:px-4 [&_td]:py-1 [&_th]:border-b [&_th]:border-gray-200 [&_th]:p-4 [&_th_p]:block [&_th_p]:text-sm [&_th_p]:font-medium [&_th_p]:leading-none [&_th_p]:antialiased">
          <thead className="bg-gray-200">
            <tr>
              <th>
                <p>#</p>
              </th>
              <th>
                <p>نام</p>
              </th>
              <th>
                <p>نام خانوادگی</p>
              </th>
              <th>
                <p>شماره موبایل</p>
              </th>
              <th>
                <p>ایمیل</p>
              </th>
              <th>
                <p>آدرس</p>
              </th>
              <th>
                <p>سطح دسترسی</p>
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {fetchUsers.data?.map((item, index) => (
              <tr key={item._id} className="odd:bg-gray-50">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td className="m-2 flex w-fit gap-2 rounded-md border border-teal !p-1">
                  <button
                    className={cn({
                      'bg-teal text-white px-2 pointer-events-none py-1 rounded-md':
                        item.role.toLocaleLowerCase() === 'user',
                    })}
                    onClick={() =>
                      handleChangeUserRole({
                        id: item._id,
                        role: 'user',
                      })
                    }
                  >
                    user
                  </button>
                  <button
                    className={cn({
                      'bg-teal text-white px-2 pointer-events-none py-1 rounded-md':
                        item.role.toLocaleLowerCase() === 'admin',
                    })}
                    onClick={() =>
                      handleChangeUserRole({
                        id: item._id,
                        role: 'admin',
                      })
                    }
                  >
                    admin
                  </button>
                </td>
                <td className="text-right">
                  <button onClick={() => handleDeleteUser(item._id)}>
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
