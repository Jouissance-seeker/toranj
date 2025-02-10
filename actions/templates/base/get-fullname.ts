'use server';

import { cookies } from 'next/headers';

type TResponse = string;

export async function getFullname(): Promise<TResponse> {
  const cookieStore = await cookies();
  return String(cookieStore.get('auth')?.value || '');
}
