'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { IoMdTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { APIdeleteCategory } from '@/actions/routes/dashboard/categories/delete-category';
import { APIgetCategories } from '@/actions/routes/global/get-categories';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function List() {
  const fetchCategories = useQuery({
    queryKey: ['categories'],
    queryFn: () => APIgetCategories(),
  });
  const addCategoryToggleUrlState = useToggleUrlState('add-category');
  const handleShowModalAddCategory = () => {
    addCategoryToggleUrlState.show();
  };
  const editCategoryToggleUrlState = useToggleUrlState('edit-category');
  const handleShowModalEditCategory = (data: any) => {
    editCategoryToggleUrlState.show({
      title: data.title,
      id: data.id,
      image: `${process.env.BASE_URL}${data.image.path}`,
    });
  };
  const handleDeleteCategory = async (id: string) => {
    const res = await APIdeleteCategory({
      path: {
        id,
      },
    });
    if (res.status === 'success') {
      fetchCategories.refetch();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  if (fetchCategories.isLoading) {
    return <Loader />;
  }

  return (
    <section className="flex size-full flex-col gap-3">
      {/* actions */}
      <button
        onClick={handleShowModalAddCategory}
        className="w-fit rounded-lg bg-teal p-2 text-smp text-white"
      >
        افزودن دسته بندی
      </button>
      {/* table */}
      <div className="relative flex size-full h-fit flex-col overflow-auto rounded-xl border border-teal/20 bg-white bg-clip-border text-gray-600">
        {fetchCategories.data?.length !== 0 ? (
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
                <th />
              </tr>
            </thead>
            <tbody>
              {fetchCategories.data?.map((item, index) => (
                <tr key={item._id} className="even:bg-gray-50">
                  <td>{index + 1}</td>
                  <td className="text-center">
                    <Image
                      src={`${process.env.BASE_URL}${item.image.path}`}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="max-w-[150px] truncate text-right">
                    {item.title}
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() =>
                        handleShowModalEditCategory({
                          title: item.title,
                          image: item.image,
                          id: item._id,
                        })
                      }
                      className="mx-2"
                    >
                      <MdEdit size={22} />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(item._id)}
                      className="mx-2"
                    >
                      <IoMdTrash size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="my-5">
            <Empty text="دسته بندی برای نمایش وجود ندارد!" />
          </div>
        )}
      </div>
    </section>
  );
}
