import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anshul Kanwar',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-300 max-w-xl mx-5 sm:mx-auto">{children}</body>
    </html>
  )
}
