import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return <nav className="w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4" style={{backgroundColor: '#00a5b9'}}>
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#user"
            onClick={(e) => e.preventDefault()}>
            Pro Planner Dashboard
          </a>
            {/* Form */}
            <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                <div className="relative flex w-full flex-wrap items-stretch">


                </div>
            </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>

}
