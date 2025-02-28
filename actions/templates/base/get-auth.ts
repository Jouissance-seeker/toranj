'use server';

import { cookies } from 'next/headers';
import { TUser } from '@/types/user';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<TUser | null>;

export async function APIgetAuth(): TReturn {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;
  const res = await fetcher<{ user: TUser }>({
    endpoint: '/auth/getMe',
    method: 'get',
    contentType: 'json',
  });
  return res.data?.user || null;
}
