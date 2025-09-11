import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Global Wheelz - International Logistics & Transportation Solutions',
  description: 'Leading global logistics company providing air freight, sea freight, custom clearance, door-to-door services, and international transportation solutions worldwide.',
  keywords: 'logistics, freight forwarding, air freight, sea freight, custom clearance, international transportation, door to door delivery, shipping solutions',
  authors: [{ name: 'Global Wheelz' }],
  creator: 'Global Wheelz',
  publisher: 'Global Wheelz',
  robots: 'index, follow',
  metadataBase: new URL('https://globalwheelz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Global Wheelz - International Logistics & Transportation Solutions',
    description: 'Leading global logistics company providing air freight, sea freight, custom clearance, door-to-door services, and international transportation solutions worldwide.',
    type: 'website',
    locale: 'en_US',
    url: 'https://globalwheelz.com',
    siteName: 'Global Wheelz',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Global Wheelz Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Wheelz - International Logistics & Transportation Solutions',
    description: 'Leading global logistics company providing air freight, sea freight, custom clearance, door-to-door services, and international transportation solutions worldwide.',
    images: ['/Logo.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#DC2626',
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
