'use client'

import { useRef, useState } from 'react'
import { addEntry } from '../_actions'

const GuestbookEntryForm = () => {
  const formRef = useRef(null)
  const [validationError, setValidationError ] = useState(null)

  async function action(data) {
    const result = await addEntry(data)

    if (result?.error) {
      setValidationError(result.error)
    } else {
      setValidationError(null)
      formRef.current.reset()
    }
  }
  
  return (
    <form
      className='flex flex-col max-w-sm text-sm gap-y-3'
      action={action}
      ref={formRef}
    >
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        className='px-3 py-1 bg-transparent border rounded dark:border-gray-600'
      />
      {validationError?.name && (<p className='text-sm text-red-400'>{validationError.name._errors.join(', ')}</p>)}
      <input
        type='text'
        name='message'
        placeholder='Your Message'
        className='px-3 py-1 bg-transparent border rounded dark:border-gray-600'
      />
      {validationError?.message && (<p className='text-sm text-red-400'>{validationError.message._errors.join(', ')}</p>)}
      <button
        type='submit'
        // disabled={isMutating}
        className='px-3 py-1 text-white bg-black rounded disabled:opacity-0'
      >
        Add
      </button>
    </form>
  )
}

export default GuestbookEntryForm