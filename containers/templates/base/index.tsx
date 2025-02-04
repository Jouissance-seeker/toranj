"use client";

import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

interface ITemplateProps {
  children: ReactNode;
}

export function TemplateBase(props: ITemplateProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
