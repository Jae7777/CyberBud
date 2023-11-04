import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import './globals.css'
import ClientOnly from "./components/ClientOnly"
import Navbar from "./components/navbar/Navbar"

export const metadata: Metadata = {
  title: 'CyberBud',
  description: 'Start writing secure code with CyberBud',
}

const font = Gothic_A1({
  subsets: ["latin"],
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
