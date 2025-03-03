'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  path: {
    id: string;
  };
  body: {
    role: 'USER' | 'ADMIN';
  };
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIchangeUserRole(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: `/users/${params.path.id}/role`,
    method: 'put',
    contentType: 'json',
    body: params.body,
  });

  return {
    message: res.message,
    status: res.status,
  };
}
