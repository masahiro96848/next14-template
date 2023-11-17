'use client'
import React, { useCallback, useState } from 'react'
import { TaskCreatePresenter } from '@/tasks/create/TaskCreatePresenter'
import { useRouter } from 'next/navigation'
import { EventType } from '@/config/event'
import { createTaskApi } from '@/apis/taskAPI'

export const TaskCreateContainer = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string>('')

  /**
   * title更新処理
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback(
    (event) => setTitle(event.target.value),
    [],
  )

  /**
   * Todo作成処理
   */
  const handleTaskCreate: EventType['onSubmit'] = async (event) => {
    event.preventDefault()
    const res = await createTaskApi(title)
    router.push('/')
    if (res?.code === 401) {
      console.log('task create error')
      return
    }
  }

  return (
    <TaskCreatePresenter
      title={title}
      handleChangeTitle={handleChangeTitle}
      handleTaskCreate={handleTaskCreate}
    />
  )
}
