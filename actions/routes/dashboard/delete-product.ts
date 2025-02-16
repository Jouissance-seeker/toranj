'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  path: {
    id: string;
  };
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIdeleteProduct(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: `/products/${params.path.id}/remove`,
    method: 'delete',
    contentType: 'json',
  });

  return {
    message: res.message,
    status: res.status,
  };
}
