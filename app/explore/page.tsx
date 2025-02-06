'use client';

import { FilterCategories } from '@/containers/routes/explore/filter-categories';
import { FilterDiscount } from '@/containers/routes/explore/filter-discount';
import { List } from '@/containers/routes/explore/list';

export default function Page() {
  return (
    <div className="container grid h-full gap-3 md:grid-cols-[200px_1fr]">
      <div className="top-4 flex h-fit flex-col gap-4 md:sticky">
        <FilterCategories />
        <FilterDiscount />
      </div>
      <List />
    </div>
  );
}
