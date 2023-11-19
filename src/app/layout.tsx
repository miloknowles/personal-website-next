import type { Metadata } from 'next';

import '@radix-ui/themes/styles.css';
// https://www.radix-ui.com/themes/docs/theme/token-reference
import './theme-config.css';

import { Theme } from '@radix-ui/themes';

import './globals.css';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Circular } from '@/app/fonts/index';


export const metadata: Metadata = {
  title: 'Milo Knowles',
  description: "I'm a software engineer focused on climate and the food system.",
}


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
      </head>
      <body className={Circular.variable}>
        <Theme appearance="dark" accentColor="jade" radius="medium">
          <Navigation/>
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  )
}
