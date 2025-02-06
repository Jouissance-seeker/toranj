'use client';

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { ProductCard } from '@/components/product-card';
import { categoriesData } from '@/resources/categories';
import { cn } from '@/utils/cn';

export function ArchiveList() {
  return (
    <div className="container col-span-1 grid h-fit grid-cols-1 gap-3 sm:grid-cols-2">
      {categoriesData
        .flatMap((category) => category.children)
        .map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
    </div>
  );
}

export const FilterCategories = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <section className="h-fit rounded-lg border bg-white lg:rounded-xl">
      {/* head */}
      <button
        onClick={() => setIsShow((prev) => !prev)}
        className="flex w-full items-center justify-between p-2.5 text-smp font-medium"
      >
        <p className="text-sm text-gray-600 lg:text-smp">دسته بندی ها</p>
        <HiChevronDown
          size={18}
          className={cn('transition-all', {
            'rotate-180': isShow,
          })}
        />
      </button>
      {/* body */}
      <div
        className={cn('h-0 opacity-0 transition-all overflow-hidden', {
          'h-auto opacity-100': isShow,
        })}
      >
        <div className="flex flex-col gap-1.5 border-t p-2.5">
          <p>i</p>
        </div>
      </div>
    </section>
  );
};
