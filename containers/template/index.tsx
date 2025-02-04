'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface ITemplateProps {
  children: ReactNode;
}

export function Template(props: ITemplateProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <main className="size-full">{props.children}</main>
      </main>
      <Footer />
    </>
  );
}
