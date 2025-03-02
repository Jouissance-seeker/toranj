'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  body: {
    items: {
      productID: string;
      quantity: number;
    }[];
  };
}

type TReturn = Promise<{
  message: string;
  status: 'success' | 'fail';
}>;

export async function APIsendCartItems(params: IParams): TReturn {
  const res = await fetcher({
    endpoint: `/orders/checkout`,
    method: 'post',
    contentType: 'json',
    body: params.body,
  });
  return {
    message: res.message,
    status: res.status,
  };
}
