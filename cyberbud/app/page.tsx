'use client'

import ClientOnly from "./components/ClientOnly"
import About from "./components/About"
import ScrollToBottomButton from "./components/ScrollToBottomButton"
import Footer from "./components/footer/Footer"
import LandingPage from "./components/Landing"
import Navbar from "./components/navbar/Navbar"
import BreakCode from "./components/breakcode/BreakCode"


export default function Home() {
  return (
    <> 
      <ClientOnly>
        <Navbar />
        <LandingPage />
        <BreakCode />
        <About />
        <Footer />
        <ScrollToBottomButton></ScrollToBottomButton>
      </ClientOnly>
    </>
  )
}