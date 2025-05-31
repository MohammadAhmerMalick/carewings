import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { classnames } from '@/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './globals.css'

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const metaTitle = 'Carewings'
const metaDescription = 'Medical'
const metaFavicon = '/icon?<generated>'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  appleWebApp: {
    capable: true,
    title: metaTitle,
    statusBarStyle: 'default',
    startupImage: metaFavicon,
  },
  openGraph: {
    title: metaTitle,
    images: metaFavicon,
    description: metaDescription,
  },
  twitter: {
    title: metaTitle,
    images: metaFavicon,
    description: metaDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classnames(montserrat.className, 'antialiased')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
