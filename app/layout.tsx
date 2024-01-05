import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Material Virtual',
  description: 'Developed by @gabrielstro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-NDB7Z5J6" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NDB7Z5J6');
          `}
        </Script>
      </head>
      <body className={sora.className}>{children}</body>
    </html>
  )
}
