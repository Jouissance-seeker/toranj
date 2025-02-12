'use server';

import { TCategory } from '@/types/category';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TCategory[] | null>;

export async function APIgetCategories(): TReturn {
  const data = await fetcher<{ categories: TCategory[] }>({
    endpoint: '/categories',
    method: 'get',
    contentType: 'json',
  });
  if (!data.categories) return null;
  return data.categories;
}
