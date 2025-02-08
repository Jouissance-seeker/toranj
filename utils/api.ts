import axios from 'axios';
import toast from 'react-hot-toast';

export const baseURL = 'https://api.brity.ir/api';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) {
      toast.error('لطفا اتصال اینترنت خود را بررسی کنید!');
    } else if (error.response.data.error) {
      toast.error(error.response.data.error);
    } else if (error.response.status === 500) {
      toast.error('متاسفیم, یک خطای غیر منتظره در سمت سرور رخ داد!');
    }
    return Promise.reject(error);
  },
);
