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
      <body className="bg-zinc-800 text-white max-w-xl mx-5 sm:mx-auto">{children}</body>
    </html>
  )
}
