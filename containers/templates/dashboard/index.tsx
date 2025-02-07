'use client';

import { ReactNode } from 'react';
import { Header } from './header';

interface IDashboardProps {
  children: ReactNode;
}

export function Dashboard(props: IDashboardProps) {
  return (
    <div className="flex h-full flex-col lg:flex-row-reverse">
      <Header />
      <main className="container my-6 flex w-full">{props.children}</main>
    </div>
  );
}
