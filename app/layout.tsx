import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import Hotjar from '@hotjar/browser';

export const metadata: Metadata = {
  title: 'Material Virtual',
  description: 'Developed by @gabrielstro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sora = Sora({ subsets: ['latin'] })
  Hotjar.init(3818201, 6);
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NDB7Z5J6" />
      <body className={sora.className}>{children}</body>
    </html>
  )
}
