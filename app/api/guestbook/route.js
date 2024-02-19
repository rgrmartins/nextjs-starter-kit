import { NextResponse } from 'next/server'
import {
  createGuestbookEntry,
  getGuestbookEntries,
} from '@/lib/mongo/guestbook'

export async function GET() {
  try {
    const { entries, error } = await getGuestbookEntries()

    if (error) throw new Error(error)

    return NextResponse.json({ entries }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { name, message } = await request.json()

    if (!name || !message) {
      throw new Error('Name and message are required')
    }

    const { insertedId, error } = await createGuestbookEntry({ name, message })

    if (error) throw new Error(error)

    return NextResponse.json({ insertedId }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}