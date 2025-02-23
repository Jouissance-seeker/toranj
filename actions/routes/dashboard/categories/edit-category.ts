'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  path: string;
  body: FormData;
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIeditCategory(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: `/categories/${params.path}/edit`,
    method: 'put',
    contentType: 'form-data',
    body: params.body,
  });
  return {
    message: res.message,
    status: res.status,
  };
}
