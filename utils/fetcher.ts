'use server';

interface IParams {
  endpoint: string;
  method: 'post' | 'get' | 'put' | 'delete';
  contentType: 'json' | 'formData';
  body?: Record<string, any>;
}

type TResponse<T> = {
  message: string;
  status: 'success' | 'fail';
} & T;

export async function fetcher<T>(params: IParams): Promise<TResponse<T>> {
  try {
    const baseUrl = 'http://localhost:5000';
    const isJson = params.contentType === 'json';
    const headers = isJson ? { 'Content-Type': 'application/json' } : undefined;
    const body = isJson
      ? JSON.stringify(params.body)
      : (params.body as unknown as FormData);
    const res = await fetch(`${baseUrl}${params.endpoint}`, {
      method: params.method.toUpperCase(),
      headers,
      body,
    });
    const data: Partial<TResponse<T>> = await res.json();
    //console.log(data);
    return {
      ...(data as T),
      message:
        data.message ||
        (res.ok ? 'عملیات با موفقیت انجام شد!' : 'عملیات با خطا مواجه شد!'),
      status: res.ok ? 'success' : 'fail',
    } as TResponse<T>;
  } catch (error: any) {
    return {
      message: error.message || 'یک خطای غیرمنتظره رخ داد!',
      status: 'fail',
    } as TResponse<T>;
  }
}
