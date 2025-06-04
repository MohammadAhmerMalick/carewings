import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

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
const metaDescription = 'Doctor at hotel'
const metaFavicon = '/icon?<generated>'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: ['doctor at hotel'],
  icons: '/favicon.jpg',
  appleWebApp: {
    capable: true,
    title: metaTitle,
    statusBarStyle: 'default',
    startupImage: metaFavicon,
  },
  openGraph: {
    title: metaTitle,
    images: '/assets/images/favicon.jpg',
    description: metaDescription,
  },
  twitter: {
    title: metaTitle,
    images: '/assets/images/favicon.jpg',
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
      <GoogleTagManager gtmId="GTM-MCJT9FCQ" />
      <body className={classnames(montserrat.className, 'antialiased')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
