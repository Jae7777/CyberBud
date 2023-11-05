import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import ClientOnly from "./components/ClientOnly"
import Navbar from "./components/navbar/Navbar"

export const metadata: Metadata = {
  title: 'CyberBud',
  description: 'Start writing secure code with CyberBud',
}

const font = Nunito({
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
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <CurrentPage />
        {children}
      </body>
    </html>
  )
}
