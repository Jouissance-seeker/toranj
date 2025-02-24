'use server';

import { TProduct } from '@/types/product';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TProduct[] | null>;

export async function APIgetProducts(): TReturn {
  const res = await fetcher<{ products: TProduct[] }>({
    endpoint: '/products',
    method: 'get',
    contentType: 'json',
  });
  return res.data?.products || null;
}
