import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import data from '../../data.json';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className + ' h-screen overflow-hidden'}>{children}</body>
    </html>
  )
}
