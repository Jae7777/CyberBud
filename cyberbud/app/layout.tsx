import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import ClientOnly from "./components/ClientOnly"
import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: 'CyberBud',
  description: 'Start writing secure code with CyberBud',
}

const font = Space_Mono({
  subsets: ["latin"],
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
