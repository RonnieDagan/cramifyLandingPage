import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { DraftModeScript } from '@makeswift/runtime/next/server'

import '@/lib/makeswift/components'
import { MakeswiftProvider } from '@/lib/makeswift/provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cramify ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <DraftModeScript />
      </head>
      <body className={inter.className}>
        <MakeswiftProvider>{children}</MakeswiftProvider>
        <Analytics />
      </body>
    </html>
  )
}
