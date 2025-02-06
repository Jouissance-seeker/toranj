import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUpdateQuery } from '@/hooks/update-query';

export function FilterDiscount() {
  const searchParams = useSearchParams();
  const updateQuery = useUpdateQuery();
  const queryKey = 'filter-discount';
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    updateQuery((prev) => ({
      ...prev,
      [queryKey]: isChecked ? undefined : String(true),
    }));
    setIsChecked((prev) => !prev);
  };
  useEffect(() => {
    const paramValue = searchParams.get(queryKey);
    setIsChecked(paramValue === String(true));
  }, [searchParams, queryKey]);

  return (
    <section className="flex h-fit w-full items-center justify-between rounded-xl border bg-white p-3 lg:rounded-xl">
      <p className="text-sm text-gray-600 lg:text-smp">فقط تخفیف دار ها</p>
      <div className="relative h-5 w-fit">
        <input
          type="checkbox"
          className="peer h-5 w-11 cursor-pointer appearance-none rounded-full bg-slate-100 transition-colors duration-300 checked:bg-teal"
          checked={isChecked}
          onChange={handleToggle}
        />
        <button
          onClick={handleToggle}
          className="absolute left-0 top-0 size-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal"
        />
      </div>
    </section>
  );
}
