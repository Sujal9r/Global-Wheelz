import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'global-Wheels - Smart Solutions for Smarter Enterprises',
  description: 'A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.',
  keywords: 'HR software, payroll, performance management, time attendance, hiring, onboarding, business solutions',
  authors: [{ name: 'global-Wheels' }],
  creator: 'global-Wheels',
  publisher: 'global-Wheels',
  robots: 'index, follow',
  metadataBase: new URL('https://global-Wheels.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'global-Wheels - Smart Solutions for Smarter Enterprises',
    description: 'A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.',
    type: 'website',
    locale: 'en_US',
    url: 'https://global-Wheels.com',
    siteName: 'global-Wheels',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'global-Wheels Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'global-Wheels - Smart Solutions for Smarter Enterprises',
    description: 'A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.',
    images: ['/Logo.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#181A1C',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/Logo.png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>
        <div suppressHydrationWarning={true}>
          {children}
        </div>
      </body>
    </html>
  )
}
