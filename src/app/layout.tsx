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
      <body className="bg-stone-900 text-stone-400 max-w-2xl mx-5 sm:mx-auto pb-20">{children}</body>
    </html>
  )
}
