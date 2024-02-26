'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { EmailLoginFormData } from '../../lib/schema'

const EmailSignInForm = ({ callbackUrl }) => {
  const [validationError, setValidationError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()

    // Reset Errors
    setValidationError(null)

    // Get form data
    const form = event.target
    const formData = new FormData(form)
    const { email } = Object.fromEntries(formData)

    console.log('email >>>>', email)

    // Validate form data
    const { error: zodError } = EmailLoginFormData.safeParse({ email })

    if (zodError) {
      setValidationError(zodError.format())
      return
    }

    // Send signin in email
    signIn('email', { email, callbackUrl })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-y-2">
        <label className='font-semibold'>Sign in with your email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete='email'
          placeholder="hello@me.com"
          className="px-3 bg-transparent border border-gray-400 rounded-lg"
          required
        />
        {validationError && (
          <div className="mx-2 my-1 text-sm text-red-400">{validationError.email._errors.join(', ')}</div>
        )}
      </div>
      <button
        type="submit"
        className='inline-flex justify-center w-full mt-3 border border-gray-400 rounded-lg'
      >
        Continue with email
      </button>
    </form>
  )
}

export default EmailSignInForm