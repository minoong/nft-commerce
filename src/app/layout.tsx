import NavBar from '@/components/layout/navBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="ko">
   <body className={inter.className}>
    <NavBar />
    {children}
   </body>
  </html>
 )
}
