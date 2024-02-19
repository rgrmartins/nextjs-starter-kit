'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      className={isActive ? 'text-cyan-500' : ''}
      href={href}
      {...rest}
    />
  )
}

export default NavLink