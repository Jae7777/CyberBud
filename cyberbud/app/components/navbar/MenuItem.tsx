'use client';

import Link from 'next/link'

interface MenuItemProps {
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
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
      {label}
    </div>
  )
}

export default MenuItem