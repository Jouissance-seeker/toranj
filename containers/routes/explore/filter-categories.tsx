import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi2';
import { useUpdateQuery } from '@/hooks/update-query';
import { categoriesData } from '@/resources/categories';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';

export function FilterCategories() {
  return (
    <section className="h-fit w-full rounded-xl border bg-white lg:rounded-xl">
      {/* head */}
      <button className="flex w-full items-center justify-between p-2.5 text-smp font-medium">
        <p className="text-sm text-gray-600 lg:text-smp">دسته بندی ها</p>
      </button>
      {/* body */}
      <div>
        <div className="flex flex-col gap-1.5 border-t p-2.5">
          {categoriesData.map((item) => (
            <CheckboxItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ICheckboxItemProps {
  data: {
    id: number;
    image: string;
    title: string;
    children: TProduct[];
  };
}

const CheckboxItem = (props: ICheckboxItemProps) => {
  const searchParams = useSearchParams();
  const updateQuery = useUpdateQuery();
  const queryKey = 'filter-categories';
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const paramValues =
      searchParams.get(queryKey)?.split(',').map(Number) || [];
    setIsChecked(paramValues.includes(props.data.id));
  }, [searchParams, queryKey, props.data.id]);
  const handleCheck = () => {
    updateQuery((prev) => {
      const currentValues = prev[queryKey]?.split(',').map(Number) || [];
      const updatedValues = isChecked
        ? currentValues.filter((value: number) => value !== props.data.id)
        : [...currentValues, props.data.id];
      return {
        ...prev,
        'filter-discount': undefined,
        [queryKey]: updatedValues.length ? updatedValues.join(',') : undefined,
      };
    });
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCheck}
        className={cn(
          'size-5 rounded-md border transition-all border-gray-200 bg-gray flex items-center justify-center',
          { 'bg-teal': isChecked },
        )}
      >
        {isChecked ? <HiCheck className="fill-white p-0.5" /> : null}
      </button>
      <p className="text-sm text-gray-600">{props.data.title}</p>
    </div>
  );
};
