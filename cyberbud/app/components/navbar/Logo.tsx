'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const Router = useRouter();

  return (
    <Image
      alt="CyberBud Logo"
      className="md:block cursor-pointer"
      height="60"
      width="60"
      src="/CyberBud Mascot.png"
    />
  )
}

export default Logo