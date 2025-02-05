'use client';

import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface ITemplateProps {
  children: ReactNode;
}

export function Template(props: ITemplateProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-14">{props.children}</main>
      <Footer />
    </>
  );
}
