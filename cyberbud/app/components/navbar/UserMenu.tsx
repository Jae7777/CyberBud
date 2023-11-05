'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem'
import UploadButton from '../UploadButton';
import { useCallback, useState } from 'react'


const UserMenu = () => {
  return (
    <div className="relative">
      <div
        className="
          rounded-xl
          shadow-md
          bg-gray-900
          overflow-hidden
          right-0
          text-sm
        "
      >
        <div className="flex flex-row cursor-pointer">
          <>
            <MenuItem 
              label="Learn more"
            />
            <MenuItem 
              label="Break the code"
            />
          </>
        </div>
      </div>
    </div>
  )
}

export default UserMenu