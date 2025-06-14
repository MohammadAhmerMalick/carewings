import Script from 'next/script'
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

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: ['doctor at hotel'],
  appleWebApp: {
    capable: true,
    title: metaTitle,
    statusBarStyle: 'default',
  },
  openGraph: {
    type: 'website',
  },
  twitter: {
    card: 'summary',
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
        <Script src="/scripts/general.js" />
      </body>
    </html>
  )
}
