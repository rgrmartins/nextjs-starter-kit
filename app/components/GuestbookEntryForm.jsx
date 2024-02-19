'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

const GuestbookEntryForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isPending || isFetching

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const {name, message} = Object.fromEntries(formData)
    
    if (!name || !message) return

    setIsFetching(true)

    const { error } = await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    })

    form.reset()
    setIsFetching(false)
    startTransition(() => router.refresh())
  }
  
  return (
    <form
      className='flex flex-col max-w-sm text-sm gap-y-3'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        className='px-3 py-1 bg-transparent border rounded dark:border-gray-600'
      />
      <input
        type='text'
        name='message'
        placeholder='Your Message'
        className='px-3 py-1 bg-transparent border rounded dark:border-gray-600'
      />
      <button
        type='submit'
        disabled={isMutating}
        className='px-3 py-1 text-white bg-black rounded disabled:opacity-0'
      >
        Add
      </button>
    </form>
  )
}

export default GuestbookEntryForm