'use client';

import Link from 'next/link'

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href
}) => {
  return (
    <a href={href}>
    <div
      className="
        px-4
        py-3
        hover:bg-neutral-100transition
        hover:underline
        font-semibold
      "
    >
      {label}
    </div>
    </a>
  )
}

export default MenuItem