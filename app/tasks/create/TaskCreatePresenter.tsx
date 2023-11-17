import { EventType } from '@/config/event'
import React from 'react'

type Props = {
  title: string
  handleChangeTitle: EventType['onChangeInput']
  handleTaskCreate: EventType['onSubmit']
}

export const TaskCreatePresenter = ({
  title,
  handleChangeTitle,
  handleTaskCreate,
}: Props) => {
  return (
    <div>
      <form onSubmit={handleTaskCreate}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
          placeholder="taskを入力してください"
        />
        <button>submit</button>
      </form>
    </div>
  )
}
