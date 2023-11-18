import { TaskType } from '@/types/Task'
import Link from 'next/link'
import React from 'react'

type Props = {
  tasks: TaskType[]
}

export const TasksPresenter: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
