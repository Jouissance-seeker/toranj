'use client';

import { ReactNode } from 'react';

interface IDashboardProps {
  children: ReactNode;
}

export function Dashboard(props: IDashboardProps) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-14">
      {props.children}
    </main>
  );
}
