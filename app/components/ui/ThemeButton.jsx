'use client'
import { useState, useEffect} from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()


  // if case usetheme inverter icons
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center p-2 transition-opacity rounded-lg'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
        {resolvedTheme === 'dark' ? (
          <SunIcon className='w-5 h-5 text-blue-300' />
        ) : (
          <MoonIcon className='w-5 h-5 text-slate-800' />
        )}
    </button>
  )
}

export default ThemeButton