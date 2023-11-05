'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Logo = () => {
  const Router = useRouter();

  return (
    <div className="flex items-center">
      <Link href="/">
      <Image
        alt="CyberBud Logo"
        className="md:block cursor-pointer"
        height="60"
        width="60"
        src="/CyberBud Mascot.png"
      />
      </Link>
      <Link href="/">
        <div className="
            text-1xl 
            bg-violet-900 
            rounded-md 
            outline-double 
            outline-violet-400 
            hover:bg-violet-800
            px-3 
            mx-5
            py-2
            hidden
            md:block
          "
        >
          CyberBud
        </div>
      </Link>
    </div>
    
  )
}

export default Logo