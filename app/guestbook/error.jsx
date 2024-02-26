'use client'

const Error = ({ reset }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-4 text-red-400">Something went wrong!</h2>
        <button
          className="px-3 py-1 text-sm text-white bg-black rounded dark:text-black disabled:opacity-50 dark:bg-white"
          onClick={() => reset()}
        >
          Try Again  
        </button>        
      </div>
    </section>
  )
}

export default Error