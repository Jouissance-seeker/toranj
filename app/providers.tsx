'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProgressBar } from 'next-nprogress-bar';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Loader } from '@/components/loader';

interface IProps {
  children: ReactNode;
}

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#183D3D"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

const Toast = () => {
  return <Toaster />;
};

const ReactQuery = ({ children }: IProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default function Providers({ children }: IProps) {
  return (
    <>
      <Toast />
      <ProgressBar />
      <ReactQuery>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </ReactQuery>
    </>
  );
}
