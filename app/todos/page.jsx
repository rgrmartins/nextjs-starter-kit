async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (!res.ok) throw new Error('Failed to fetch Todos')

  return res.json()
}

const Page = async () => {
  const todos = await getTodos()

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">To Do</h1>
        <ul className="flex flex-col gap-3 mt-6">
          {todos.slice(0, 10).map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page