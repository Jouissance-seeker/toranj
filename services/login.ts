import { api } from '@/utils/api';

interface IParams {
  body: {
    phone: string;
    password: string;
  };
}

type TResponse = void;

export const APIlogin = async (params: IParams): Promise<TResponse> => {
  const endpoint = '/auth/login/';
  const { data } = await api.post(endpoint, params.body);
  return data;
};
