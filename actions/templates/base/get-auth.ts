'use server';

import { cookies } from 'next/headers';
import { TUser } from '@/types/user';

type TReturn = Promise<{
  data: TUser | null;
  isLoggined: boolean;
}>;

export async function getAuth(): TReturn {
  const cookieStore = await cookies();
  const user = cookieStore.get('user');
  if (user) {
    return {
      data: JSON.parse(user.value),
      isLoggined: true,
    };
  } else {
    return {
      data: null,
      isLoggined: false,
    };
  }
}
