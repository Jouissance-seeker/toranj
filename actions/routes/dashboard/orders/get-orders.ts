'use server';

import { TUser } from '@/types/user';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TUser[] | null>;

export async function APIgetUsers(): TReturn {
  const res = await fetcher<{ users: TUser[] }>({
    endpoint: '/orders/all',
    method: 'get',
    contentType: 'json',
  });
  return res.data?.users || null;
}
