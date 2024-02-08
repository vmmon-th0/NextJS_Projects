'use client'
import { useEffect, useState } from "react";

interface Task {
  id: number;
  content: string;
}

export default function Home() {

  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const addTask = (e: any) => {

    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      content: task
    }

    setTasks((prevTasks) => {
      return [...prevTasks, newTask]
    })
  }

  const removeTask = (id: number) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id != id)
    })
  }

  const listTasks = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.content}
        <button onClick={() => removeTask(task.id)}>X</button>
      </li>
    )
  })

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl">Todo app</h1>

      <form onSubmit={addTask}>
        <input type="text" name="name" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">add task</button>
      </form>

      <ul>
        {listTasks}
      </ul>
    </main>
  );
}
