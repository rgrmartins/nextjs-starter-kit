import { getGuestbookEntries } from '@/lib/mongo/guestbook'
import GuestbookEntryForm from '../components/GuestbookEntryForm'

export const dynamic = 'force-dynamic'

async function getData() {
  const { entries, error } = await getGuestbookEntries()

  if (!entries || error) {
    throw new Error('Failed to fetch guestbook entries')
  }

  return entries
}

const Page = async () => {
  const entries = await getData()
  console.log('entries >>>', entries)

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold">Guestbook</h1>

        <GuestbookEntryForm />

        <ul className="flex flex-col mt-8 gap-y-2">
          {entries.map(entry => (
            <li key={entry._id} className="flex gap-x-3">
              <span className="text-gray-500">{entry.name}</span>
              <span>{entry.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page