import React from 'react'
import Logo from '../assets/images/dd_logo.svg'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Daily Dev</span>
            <img className="h-8 w-auto" src={Logo} alt="Daily Dev" />
          </a>
        </div>
      </nav>
    </header>
  )
}
