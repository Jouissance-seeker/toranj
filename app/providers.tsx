'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

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

export default function Providers({ children }: IProps) {
  return (
    <>
      <ProgressBar />
      <Suspense>{children}</Suspense>
    </>
  );
}
