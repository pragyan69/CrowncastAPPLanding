import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crowncast',
  description: 'The Ultimate Giveaway platform',
  generator: 'crowncast',
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
