'use server';

import { cookies } from 'next/headers';
import { TUser } from '@/types/user';
import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<{ user: TUser } | null>;

export async function getAuth(): TReturn {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth')?.value;
  if (!token) return null;
  const data = await fetcher<{ user: TUser }>({
    endpoint: '/auth/getMe',
    method: 'get',
    contentType: 'json',
  });
  if (!data.user) return null;
  return { user: data.user };
}
