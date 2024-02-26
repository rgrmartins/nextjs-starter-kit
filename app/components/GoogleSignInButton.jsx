'use client'

import { signIn } from 'next-auth/react'

const GoogleSignInButton = ({ callbackUrl }) => {
  return (
    <button
      className="inline-flex justify-center w-full border border-gray-500 rounded-lg"
      onClick={() => signIn('google', { callbackUrl })}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-icon="google"
        className='w-5 mt-8'
        role='img'
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 488 512'
      >
        <path
          fill='red'
          d="M488 261.1c0-14.1-1.2-28.1-3.6-42H248v80h136c-6.4 35.9-25.7 67.9-53.5 92.9l82.4 64c48.7-45 76.7-111.2 76.7-194z"
        ></path>
      </svg>
      Continue with Google
    </button>
  )
}

export default GoogleSignInButton