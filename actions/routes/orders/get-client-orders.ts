'use server';

import { TOrder } from '@/types/order';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TOrder[] | null>;

export async function APIgetClientOrders(): TReturn {
  const res = await fetcher<TOrder[]>({
    endpoint: '/orders',
    method: 'get',
    contentType: 'json',
  });
  return res.data || null;
}
