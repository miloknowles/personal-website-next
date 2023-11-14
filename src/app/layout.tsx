import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';

import './globals.css';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Milo Knowles',
  description: "Milo Knowles' personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          <Navigation/>
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  )
}
