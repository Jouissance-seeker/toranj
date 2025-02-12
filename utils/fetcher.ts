import { cookies } from 'next/headers';

interface IParams {
  endpoint: string;
  method: 'post' | 'get' | 'put' | 'delete';
  contentType?: 'json' | 'formData';
  body?: Record<string, any> | FormData;
}

type TResponse<T> = {
  message: string;
  status: 'success' | 'fail';
} & Partial<T>;

export async function fetcher<T>({
  endpoint,
  method,
  contentType = 'json',
  body,
}: IParams): Promise<TResponse<T>> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth')?.value;
    const baseUrl = 'http://localhost:5000';
    const headers: HeadersInit = {
      ...(contentType === 'json' && { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const requestBody =
      contentType === 'json' && body && !(body instanceof FormData)
        ? JSON.stringify(body)
        : (body as FormData);
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers,
      body: requestBody,
    });
    const data: Partial<TResponse<T>> = await response.json();
    return {
      ...data,
      message:
        data.message ??
        (response.ok
          ? 'عملیات با موفقیت انجام شد!'
          : 'عملیات با خطا مواجه شد!'),
      status: response.ok ? 'success' : 'fail',
    } as TResponse<T>;
  } catch (error) {
    return {
      message: (error as Error).message || 'یک خطای غیرمنتظره رخ داد!',
      status: 'fail',
    } as TResponse<T>;
  }
}
