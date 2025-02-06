'use client';

import {
  ArchiveList,
  FilterCategories,
} from '@/containers/routes/explore/explore-list';

export default function Page() {
  return (
    <div className="container grid h-full grid-cols-[250px_1fr]">
      <FilterCategories />
      <ArchiveList />
    </div>
  );
}
