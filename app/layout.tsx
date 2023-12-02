import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Suspense } from 'react';
import Loading from './loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Block Explorer',
  description:
    ' allows users to view information about blocks, transactions, and addresses on a blockchain. It provides a user-friendly interface to interact with and explore the data stored on a blockchain. ',
};

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} bg-white`}>
        <NavBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
