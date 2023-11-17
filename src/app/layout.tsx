import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'
import data from '../../data.json';

const SCP = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={SCP.className + ' h-screen overflow-hidden'}>{children}</body>
    </html>
  )
}
