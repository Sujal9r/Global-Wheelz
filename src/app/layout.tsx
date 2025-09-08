import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Global-Wheelz - Smart Solutions for Smarter Enterprises',
  description: 'A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.',
  keywords: 'HR software, payroll, performance management, time attendance, hiring, onboarding, business solutions',
  authors: [{ name: 'Global-Wheelz' }],
  creator: 'Global-Wheelz',
  publisher: 'Global-Wheelz',
  robots: 'index, follow',
  metadataBase: new URL('https://Global-Wheelz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Global-Wheelz - Smart Solutions for Smarter Enterprises',
    description: 'A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.',
    type: 'website',
    locale: 'en_US',
    url: 'https://Global-Wheelz.com',
    siteName: 'Global-Wheelz',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Global-Wheelz Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global-Wheelz - Smart Solutions for Smarter Enterprises',
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
