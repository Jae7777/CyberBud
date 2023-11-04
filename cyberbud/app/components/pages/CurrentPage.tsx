'use client'

import LandingPage from "./LandingPage"
import { useState } from 'react'

const CurrentPage = () => {
    const [page, setPage] = useState("landing")

    return (
        <div>
            {(page=='landing') && <LandingPage />}
        </div>
    )
}

export default CurrentPage