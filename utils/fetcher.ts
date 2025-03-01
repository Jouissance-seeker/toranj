import { cookies } from 'next/headers';

type IParams = {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
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

  const response = await fetch(`${process.env.BASE_URL}${params.endpoint}`, {
    method: params.method.toLocaleUpperCase(),
    headers,
    body: bodyData,
  });

  if (!response.ok) {
    console.error('Fetch failed:', {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      body: await response.text(), // Log the response body for debugging
    });
  }

  const data = await response.json();
  const status = !response.ok ? 'fail' : 'success';
  const message = (() => {
    if (response.ok) {
      return data.message || 'عملیات با موفقیت انجام شد!';
    } else {
      return data.message || 'خطا در انجام عملیات!';
    }
  })();

  return {
    data,
    message,
    status,
  };
}
