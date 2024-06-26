'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ConnectWallet } from "@thirdweb-dev/react";


const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <header
      
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col items-center justify-between lg:flex-row ">
          {/* Logo and Hamburger for Small Screens */}
          <div className="flex w-full items-center justify-between lg:w-auto ">
            <div className="max-md:hidden ">
              {' '}
              {/* <Image
                src={Logo}
                alt="BitNBuild"
                className="h-8 w-52"
                width={1000}
                height={1000}
              /> */}
            </div>

            {/* Hamburger Menu Button */}
            <button
              id="hamburger"
              className={`focus:outline-none lg:hidden ${
                isNavVisible ? 'flipped' : ''
              }`}
              onClick={handleHamburgerClick}
            >
              <svg
                className="h-6 w-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="">
            <ul
              className={`mt-4 flex flex-col space-y-4 text-center lg:mt-0 lg:flex lg:flex-row lg:space-x-6 lg:space-y-0 ${
                isNavVisible ? 'm-0 w-full p-0' : 'hidden'
              }`}
              id="nav-links"
            >
              <li>
                <a
                  href="#home"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  About{' '}
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  Prizes{' '}
                </a>
              </li>
              <li>
                <a
                  href="#FAQ"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#Sponsor"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  Contact Us{' '}
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="brand-font border-text font-bold text-green-700 hover:text-green-800 hover:underline"
                >
                  <ConnectWallet />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar