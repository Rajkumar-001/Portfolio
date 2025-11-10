'use client';

import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Raj Kumar Pandey - Full Stack Developer</title>
        <meta
          name='description'
          content='Professional portfolio of Raj Kumar Pandey, Full Stack Developer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='bg-slate-900 text-slate-100'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
