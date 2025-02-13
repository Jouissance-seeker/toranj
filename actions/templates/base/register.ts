'use server';

import { cookies } from 'next/headers';
import { fetcher } from '@/utils/fetcher';

interface IParams {
  body: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    address: string;
    confirmPassword: string;
  };
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIregister(params: IParams): TReturn {
  const res = await fetcher<{
    token: string;
  }>({
    endpoint: '/auth/register',
    method: 'post',
    contentType: 'json',
    body: params.body,
  });
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
