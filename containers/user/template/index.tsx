'use client';

import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { ModalLogin } from './modal-login';
import { ModalRegister } from './modal-register';

interface ITemplateProps {
  children: ReactNode;
}

export function Template(props: ITemplateProps) {
  return (
    <>
      <ModalLogin />
      <ModalRegister />
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-14">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
