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
      <main className="flex flex-1 items-center justify-center">
        <main className="size-full">{props.children}</main>
      </main>
      <Footer />
    </>
  );
}
