'use server';

import { cookies } from 'next/headers';
import { TUser } from '@/types/user';
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

export async function register(params: IParams): TReturn {
  const data = await fetcher<{
    token: string;
    user: TUser;
  }>({
    endpoint: '/auth/register',
    method: 'post',
    contentType: 'json',
    body: params.body,
  });
  if (data.token) {
    const cookieStore = await cookies();
    cookieStore.set('auth', data.token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
  }
  if (data.user) {
    const cookieStore = await cookies();
    cookieStore.set(
      'user',
      JSON.stringify({
        name: data.user.name,
        lastName: data.user.lastName,
        role: data.user.role,
      }),
      {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      },
    );
  }
  return data;
}
