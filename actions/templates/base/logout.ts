'use server';

import { cookies } from 'next/headers';

type TReturn = Promise<void>;

export async function APIlogout(): TReturn {
  const cookieStore = await cookies();
  cookieStore.delete('auth');
}
