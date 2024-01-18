import type { Metadata } from 'next';
import Script from 'next/script';

import '@radix-ui/themes/styles.css';
// https://www.radix-ui.com/themes/docs/theme/token-reference
import './theme-config.css';

import { Theme } from '@radix-ui/themes';

import './globals.css';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Milo Knowles',
  description: "I'm a software engineer focused on climate and the food system.",
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌲</text></svg>"
        />
        {/* <Script src="/segment.js" async/> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BGELZ7CXQ0" async/>
        <Script src="/gtag.js" async/>
      </head>
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="indigo" radius="medium">
          <Navigation/>
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  )
}
