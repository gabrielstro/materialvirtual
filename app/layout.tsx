import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'


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
      <GoogleTagManager gtmId="GTM-NDB7Z5J6" />
      <body className={sora.className}>{children}</body>
    </html>
  )
}
