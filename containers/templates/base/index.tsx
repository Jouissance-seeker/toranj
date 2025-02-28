'use client';

import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { ModalLogin } from './modal-login';
import { ModalProduct } from './modal-product';
import { ModalRegister } from './modal-register';

interface IUserProps {
  children: ReactNode;
}

export function Base(props: IUserProps) {
  return (
    <>
      <ModalLogin />
      <ModalRegister />
      <ModalProduct />
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-14">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
