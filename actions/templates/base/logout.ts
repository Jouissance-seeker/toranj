'use server';

import { cookies } from 'next/headers';

type TResponse = void;

export async function logout(): Promise<TResponse> {
  const cookieStore = await cookies();
  cookieStore.delete('auth');
}
