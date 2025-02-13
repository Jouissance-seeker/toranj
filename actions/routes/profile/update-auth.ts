'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  body: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
  };
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIupdateAuth(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: '/users/edit',
    method: 'put',
    contentType: 'json',
    body: params.body,
  });

  return {
    message: res.message,
    status: res.status,
  };
}
