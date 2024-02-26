'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const buttonClasses = 'rounded border px-2 py-1 text-sm text-black-500 border-gray-500 dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-200 transition-colors'

const SignInButton = () => {
  const { data: session } = useSession()
  
  return (
    <>
      {session ? (
        <button className={buttonClasses} onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button className={buttonClasses} onClick={() => signIn()}>Sign In</button>
      )}
    </>
  )
}

export default SignInButton