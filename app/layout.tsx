import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sai karthik',
  description: 'Created by sai karthik',
  generator: 'sai karthik',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
