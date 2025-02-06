'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Dashboard } from './dashboard';
import { User } from './user';

interface ITemplateProps {
  children: ReactNode;
}

export function Template(props: ITemplateProps) {
  const pathname = usePathname();
  const isRouteDashboard = pathname.includes('/dashboard');

  return isRouteDashboard ? (
    <Dashboard>{props.children}</Dashboard>
  ) : (
    <User>{props.children}</User>
  );
}
