'use server';

import { TOrder } from '@/types/order';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TOrder[] | null>;

export async function APIgetDashboardOrders(): TReturn {
  const res = await fetcher<TOrder[]>({
    endpoint: '/orders/all',
    method: 'get',
    contentType: 'json',
  });
  console.log(res.data);
  return res.data || null;
}
