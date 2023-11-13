import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Button, Flex, Section, Text, Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';

import './globals.css';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

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
        </Theme>
      </body>
    </html>
  )
}
