import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Talent Bootcamp - Menghasilkan Digital Talent',
  description: 'Bergabung dengan program bootcamp terbaik untuk mengembangkan skill digital dan meraih karir impian di bidang teknologi.',
  keywords: 'bootcamp, digital talent, programming, web development, career development',
  authors: [{ name: 'Digital Talent Bootcamp' }],
  openGraph: {
    title: 'Digital Talent Bootcamp - Menghasilkan Digital Talent',
    description: 'Program bootcamp terbaik untuk mengembangkan skill digital dan meraih karir impian.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}