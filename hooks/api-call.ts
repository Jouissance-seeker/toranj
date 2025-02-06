import { useCallback, useState } from 'react';

type CallApiFunction<TReturn> = (
  apiCall: Promise<TReturn>,
  onSuccess: (data: TReturn) => void,
) => Promise<void>;

export function useApiCall<TReturn>(): [CallApiFunction<TReturn>, boolean] {
  const [isDisabledSubmitBtn, setIsDisabledSubmitBtn] = useState(false);
  const callApi: CallApiFunction<TReturn> = useCallback(
    async (apiCall, onSuccess) => {
      try {
        setIsDisabledSubmitBtn(true);
        const data = await apiCall;
        onSuccess(data);
      } finally {
        setIsDisabledSubmitBtn(false);
      }
    },
    [],
  );
  return [callApi, isDisabledSubmitBtn];
}
