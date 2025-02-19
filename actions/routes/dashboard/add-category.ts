'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  body: FormData;
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIaddCategory(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: `/categories/add`,
    method: 'post',
    contentType: 'form-data',
    body: params.body,
  });
  console.log(res);

  return {
    message: res.message,
    status: res.status,
  };
}
