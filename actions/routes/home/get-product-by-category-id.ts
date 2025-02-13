'use server';

import { TProduct } from '@/types/product';
import { fetcher } from '@/utils/fetcher';

interface IParams {
  path: {
    categoryId: string;
  };
}

type TReturn = Promise<TProduct[] | null>;

export async function APIgetProductsByCategoryId(params: IParams): TReturn {
  const res = await fetcher<{ products: TProduct[] }>({
    endpoint: `/products/category/${params.path.categoryId}`,
    method: 'get',
    contentType: 'json',
  });
  return res.data?.products || null;
}
