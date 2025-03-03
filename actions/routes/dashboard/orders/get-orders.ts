'use server';

import { TUser } from '@/types/user';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TUser[] | null>;

export async function APIgetOrders(): TReturn {
  const res = await fetcher<{ orders: any[] }>({
    endpoint: '/orders/checkout',
    method: 'get',
    contentType: 'json',
  });
  return res.data?.orders || null;
}
