import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jules Mugisha - DevOps & Data Engineer',
  description: 'I build resilient systems & transform data into insights. DevOps engineer, data engineer, and backend specialist with expertise in Kubernetes, Kafka, ClickHouse, and more.',
  keywords: ['DevOps', 'Data Engineering', 'Kubernetes', 'Kafka', 'ClickHouse', 'PostgreSQL', 'AWS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 