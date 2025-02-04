import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'ترنج',
  description: 'توسعه دهنده : حمید شاهسونی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      dir="rtl"
      className="scrollbar-hide"
      lang="fa"
    >
      <body className={'flex flex-col h-dvh'}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
