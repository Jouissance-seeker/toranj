import { cookies } from 'next/headers';

type IParams = {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  contentType: 'json' | 'form-data';
  body?: Record<string, any> | FormData;
};

type TReturn<T> = {
  message: string;
  status: 'success' | 'fail';
  data?: T;
};

export async function fetcher<T>(params: IParams): Promise<TReturn<T>> {
  const headers: HeadersInit = {};
  let bodyData: BodyInit | undefined;
  const BASE_URL = 'http://localhost:5000';
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  // set authorization header if token exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // set content-Type / set body data
  if (params.contentType === 'json') {
    headers['Content-Type'] = 'application/json';
    bodyData = params.body ? JSON.stringify(params.body) : undefined;
  } else if (
    params.contentType === 'form-data' &&
    params.body instanceof FormData
  ) {
    bodyData = params.body;
  }

  const response = await fetch(`${BASE_URL}${params.endpoint}`, {
    method: params.method,
    headers,
    body: bodyData,
  });
  const data = await response.json();

  return {
    data: data,
    message: data.message,
    status: !response.ok ? 'fail' : 'success',
  };
}
