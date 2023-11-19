import { TaskType } from '@/types/Task'
import Link from 'next/link'
import React from 'react'

type Props = {
  tasks: TaskType[]
  handleDeleteTask: (taskId: number) => Promise<void>
}

export const TasksPresenter: React.FC<Props> = ({
  tasks,
  handleDeleteTask,
}) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>{task.title}</Link>
            <button>
              <Link href={`tasks/update/${task.id}`}>編集</Link>
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
