import { EventType } from '@/config/event'
import { TaskType } from '@/types/Task'
import React from 'react'

type Props = {
  title: string
  handleChangeTitle: EventType['onChangeInput']
  handleTaskUpdate: EventType['onSubmit']
}
export const TaskUpdatePresenter = ({
  title,
  handleChangeTitle,
  handleTaskUpdate,
}: Props) => {
  return (
    <div>
      <h1>Task Update</h1>
      <form onSubmit={handleTaskUpdate}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <button>update</button>
      </form>
    </div>
  )
}
