'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const Router = useRouter();

  return (
    <div className="flex items-center">
      <Image
        alt="CyberBud Logo"
        className="md:block cursor-pointer"
        height="60"
        width="60"
        src="/CyberBud Mascot.png"
      />
      <div className="
          text-1xl 
          bg-violet-900 
          rounded-md 
          outline-double 
          outline-violet-400 
          px-3 
          mx-5
          py-2
        "
      >
        CyberBud
      </div>
    </div>
    
  )
}

export default Logo