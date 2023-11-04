import Image from 'next/image'
import About from './components/About'
import Link from 'next/link'
import ScrollToBottomButton from './components/ScrollToBottomButton'
import { AiFillCaretDown } from 'react-icons/ai'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="text-center pt-1 mt-4 w-screen">
        <div className="bg-gradient-to-r from-slate-400 via-gray-400 to-white h-screen">
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
      
      <div className="mb-32 flex justify-around text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
      </div>
      <About></About>
    </main>
  )
}
