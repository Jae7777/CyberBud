'use client'

import ClientOnly from "./components/ClientOnly"
import About from "./components/about/About"
import ScrollToBottomButton from "./components/ScrollToBottomButton"
import Dropdown from "./components/form/Dropdown"
import ProblemForm from "./components/form/ProblemForm"
import Image from "next/image"
import Container from "./components/Container"
import Footer from "./components/footer/Footer"
import { useState, useEffect } from 'react'
import LandingPage from "./components/Landing"
import Navbar from "./components/navbar/Navbar"
import BreakCode from "./components/breakcode/BreakCode"
import Chatbox from "./components/Chatbox"


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