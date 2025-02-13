'use server';

import { cookies } from 'next/headers';
import { fetcher } from '@/utils/fetcher';

interface IParams {
  body: {
    phone: string;
    password: string;
  };
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIlogin(params: IParams): TReturn {
  const res = await fetcher<{
    token: string;
  }>({
    endpoint: '/auth/login',
    method: 'post',
    contentType: 'json',
    body: params.body,
  });

  // set token to cookie
  if (res.status === 'success') {
    if (res.data?.token) {
      const cookieStore = await cookies();
      cookieStore.set('token', res.data.token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
    }
  }

  return {
    message: res.message,
    status: res.status,
  };
}
