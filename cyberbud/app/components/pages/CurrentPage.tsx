'use client' 

import LandingPage from "./LandingPage"
import BreakCode from "./BreakCode"
import { useState, useEffect } from "react"

const CurrentPage = () => {
    const [page, setPage] = useState("landing")

    return (
        <div>
            {(page == "landing") && <LandingPage />}
            {(page == "breakcode") && <BreakCode/>}
        </div>
    )
}

export default CurrentPage