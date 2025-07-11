import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khalid Portfolio - Full-Stack Developer',
  description: 'Professional portfolio showcasing web development projects, technical skills, and creative solutions.',
  generator: 'Next.js',
  icons: {
    icon: '/uploads/icon.png',
    shortcut: '/uploads/icon.png',
    apple: '/uploads/icon.png',
  },
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
