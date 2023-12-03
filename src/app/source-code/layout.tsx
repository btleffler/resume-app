import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'View Some Source Code',
  description: 'Nice Source Code, Bro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2>Source Code Layout</h2>
        {children}
      </body>
    </html>
  );
}