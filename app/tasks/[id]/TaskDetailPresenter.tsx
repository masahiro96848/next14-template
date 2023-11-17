import { TaskType } from '@/types/Task'
import React from 'react'

type Props = {
  task: TaskType | undefined
}

export const TaskDetailPresenter = ({ task }: Props) => {
  return (
    <div>
      <h1>Task詳細</h1>
      <p>{task?.title}</p>
    </div>
  )
}
