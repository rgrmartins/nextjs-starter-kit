'use client'

import { useEffect } from "react"

const Error = ({error, reset}) => {

  useEffect(() => {
    console.log('Error >>>', error)
  }, [error])

  return (
    <div>
      <h2 className="text-sm text-red-400">Something went wrong: From APP</h2>
      {/* <button onClick={() => reset()}>Try Again</button> */}
    </div>
  )
}

export default Error