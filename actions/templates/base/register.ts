'use server';

import { cookies } from 'next/headers';

interface IParams {
  body: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    password_confirmation: string;
    address: string;
  };
}

type TResponse = void;

export async function register(params: IParams): Promise<TResponse> {
  const cookieStore = await cookies();
  cookieStore.set(
    'auth',
    `${params.body.first_name} ${params.body.last_name}`,
    {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    },
  );
}
