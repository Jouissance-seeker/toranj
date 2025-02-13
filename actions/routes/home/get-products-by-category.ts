'use server';

import { TCategory } from '@/types/category';
import { fetcher } from '@/utils/fetcher';

interface IParams {
  path: {
    categoryId: string;
  };
}

type TReturn = Promise<TCategory[] | null>;

export async function APIgetProductsByCategory(params: IParams): TReturn {
  const res = await fetcher<{ categories: TCategory[] }>({
    endpoint: `/products/category/${params.path.categoryId}`,
    method: 'get',
    contentType: 'json',
  });
  return res.data?.categories || null;
}
