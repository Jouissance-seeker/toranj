import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './providers';
import localFont from 'next/font/local';
import { cn } from '@/utils/cn';
import { Template } from '@/containers/template';

export const metadata: Metadata = {
  title: 'ترنج',
  description: 'توسعه دهنده : حمید شاهسونی',
};

const iransansx = localFont({ src: '../public/fonts/iransansx.woff2' });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      dir="rtl"
      className={cn('scrollbar-hide', iransansx.className)}
      lang="fa"
    >
      <body className={'flex flex-col h-dvh'}>
        <Providers>
          <Template>{children}</Template>
        </Providers>
      </body>
    </html>
  );
}
