'use client';

import Link from 'next/link'

interface MenuItemProps {
  route: string
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  route,
  label
}) => {
  return (
    <div
      className="
        px-4
        py-3
        hover:bg-neutral-100transition
        hover:underline
        font-semibold
      "
    >
      <Link href={route} >{label}</Link>
    </div>
  )
}

export default MenuItem