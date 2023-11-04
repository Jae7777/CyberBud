'use client'

import Container from "../Container"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import UploadButton from "../UploadButton"

const Navbar = () => {
  return (
    <div className="fixed bg-gray-900 w-full z-10 shadow-sm">
      <div
        className="
          py-2
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
              flex 
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <UploadButton />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar