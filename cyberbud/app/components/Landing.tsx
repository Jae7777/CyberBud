'use client'

import Image from "next/image"
import ProblemForm from "./form/ProblemForm"
import Chatbox from "./Chatbox"
import { useState, useEffect } from 'react'

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(true)
    const toggle = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div>
            {isVisible && (<div className="
                pt-0 
                grid 
                grid-cols-1 
                sm:grid-cols-1 
                md:grid-cols-1 
                lg:grid-cols-2
                xl:grid-cols-2
                2xl:grid-cols-2
                justify-between 
                px-auto 
                items-center
            "
            >
            <Image 
                src="/hacking.png"
                alt="Hero image"
                width={400}
                height={400}
                className="py-12 mx-auto"
            />
            <ProblemForm toggle={toggle} />
            </div>)}

            {!isVisible && <Chatbox />}
        </div>
    )
}

export default LandingPage