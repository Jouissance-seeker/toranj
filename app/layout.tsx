import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Template } from '@/containers/templates';
import { cn } from '@/utils/cn';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'ترنج',
  description: 'توسعه دهنده : حمید شاهسونی',
};

const peyda = localFont({ src: '../public/fonts/peyda.woff2' });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      dir="rtl"
      className={cn('scrollbar-hide', peyda.className)}
      lang="fa"
    >
      <body className="flex h-dvh flex-col">
        <Providers>
          <Template>{children}</Template>
        </Providers>
      </body>
    </html>
  );
}
