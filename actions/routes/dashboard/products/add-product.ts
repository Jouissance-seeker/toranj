'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  body: FormData;
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIaddProduct(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: `/products/add`,
    method: 'post',
    contentType: 'form-data',
    body: params.body,
  });
  return {
    message: res.message,
    status: res.status,
  };
}
