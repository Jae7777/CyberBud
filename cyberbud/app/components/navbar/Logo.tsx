'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const Router = useRouter();

  return (
    <Image
      alt="CyberBud Logo"
      className="md:block cursor-pointer"
      height="80"
      width="80"
      src="/images/logo.png"
    />
  )
}

export default Logo