'use client'

import About from '../About'
import ScrollToBottomButton from '../ScrollToBottomButton'

const LandingPage = () => {
    return (
        <main className="flex flex-col items-center justify-between p-24">
        <div className="text-center pt-1 mt-4 w-screen">
            <div className="h-screen">
            <div className="bg-gradient-to-r from-slate-400 via-gray-400 to-white inline-block text-transparent bg-clip-text">
                <h1 className="text-6xl">
                Cyberbud
                </h1>
            </div>
            <h3 className='text-3xl pt-1 mt-4'>
                Subtitle
            </h3>
            <ScrollToBottomButton></ScrollToBottomButton>
            </div>
        </div>
            <About></About>
        </main>
    )
}

export default LandingPage