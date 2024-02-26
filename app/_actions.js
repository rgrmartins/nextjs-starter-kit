'use server'

import { createGuestbookEntry } from "@/lib/mongo/guestbook"
import { GuestbookEntry } from "@/lib/schema"
import { revalidatePath } from "next/cache"

export async function addEntry(data) {
  const { name, message } = Object.fromEntries(data)

  // if (!name || !message) {
  //   throw new Error('Name and message are required')
  // }

  const { error: zodError } = GuestbookEntry.safeParse({ name, message })

  if (zodError) {
    return { error: zodError.format() }
  }

  const { error } = await createGuestbookEntry({ name, message })

  if (error) {
    throw new Error('Failed to create guestbook entry')
  }

  revalidatePath('/guestbook')
}