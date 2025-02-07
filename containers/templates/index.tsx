'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Base } from './base';
import { Dashboard } from './dashboard';

interface ITemplateProps {
  children: ReactNode;
}

export function Template(props: ITemplateProps) {
  const pathname = usePathname();
  const isRouteDashboard = pathname.includes('/dashboard');

  return isRouteDashboard ? (
    <Dashboard>{props.children}</Dashboard>
  ) : (
    <Base>{props.children}</Base>
  );
}
