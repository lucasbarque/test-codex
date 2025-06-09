import type { Metadata } from 'next'
import Link from 'next/link'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Blue Dental Clinic',
  description: 'Family friendly dental practice',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--background)] text-[color:var(--foreground)]`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only p-2">Skip to content</a>
        <header className="bg-[color:var(--primary-blue)] text-white">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-bold focus:outline-none focus:ring-2 focus:ring-white">
              Blue Dental Clinic
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
