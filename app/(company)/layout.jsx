import React from 'react'
import NavLink from '../components/ui/NavLink'

const CompanyLayout = ({ children }) => {
  return (
    <section className='py-20'>
      <div className='container flex'>
        <div className='py-6 pr-12 overflow-y-auto border-r border-gray-200'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-col flex-1 gap-y-4'>
              <li>
                <NavLink href='/about'>About</NavLink>
              </li>
              <li>
                <NavLink href='/team'>Team</NavLink>
              </li>
              <li>
                <NavLink href='/contact'>Contact</NavLink>
              </li>
              <li>
                <NavLink href='/join'>Join</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <main className='p-6 ml-12 grow bg-gray-50 dark:bg-gray-500'>{children}</main>
      </div>
    </section>
  )
}

export default CompanyLayout