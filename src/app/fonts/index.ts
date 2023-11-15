import localFont from 'next/font/local';

export const Circular = localFont({
  src: [
    {
      path: './CircularStd/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './CircularStd/CircularStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './CircularStd/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './CircularStd/CircularStd-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-circular',
})

