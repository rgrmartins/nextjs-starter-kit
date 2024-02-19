'use client'

export default function GlobalError({error, reset}) {
  return (
    <html>
      <body>
        <h2 className="text-sm text-red-400">Something went wrong: From APP</h2>
        <button onClick={() => reset()}>Try Again</button>
      </body>
    </html>
  )
}