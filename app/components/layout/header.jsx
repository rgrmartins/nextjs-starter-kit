import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'
import ThemeButton from '../ui/ThemeButton'
import SignInButton from '../ui/SignInButton'

const Header = () => {
  return (
    <header className='p-4 bg-gray-100 dark:bg-gray-500'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-3'>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink href="/team">Team</NavLink>
          </li>
          <li>
            <NavLink href="/posts">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/guestbook">Guestbook</NavLink>
          </li>
          <ContactButton />
        </ul>

        <div className="flex items-center gap-4">
          <ThemeButton />
          <SignInButton />
        </div>
      </nav>
    </header>
  )
}

export default Header