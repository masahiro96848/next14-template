'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TaskUpdatePresenter } from '@/tasks/update/[id]/TaskUpdatePresenter'
import { useParams, useRouter } from 'next/navigation'
import { EventType } from '@/config/event'
import { fetchTaskApi, updateTaskApi } from '@/apis/taskAPI'

export const TaskUpdateContainer = () => {
  const router = useRouter()
  const param = useParams()
  const targetId = param.id

  const [title, setTitle] = useState<string>('')

  const fetchData = async () => {
    if (targetId) {
      const response = await fetchTaskApi(Number(targetId))
      if (response.code === 200 && response.data !== undefined) {
        setTitle(response.data?.title)
      } else {
        console.error('Error fetching task list')
      }
    }
  }
  useEffect(() => {
    fetchData()
  }, [targetId])

  /**
   * title更新処理
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback(
    (event) => setTitle(event.target.value),
    [],
  )

  /**
   * Task更新処理
   */
  const handleTaskUpdate: EventType['onSubmit'] = async (event) => {
    event.preventDefault()
    const res = await updateTaskApi(Number(targetId), title)
    router.push('/tasks')
    if (res?.code === 401) {
      console.log('task create error')
      return
    }
  }

  return (
    <TaskUpdatePresenter
      title={title}
      handleChangeTitle={handleChangeTitle}
      handleTaskUpdate={handleTaskUpdate}
    />
  )
}
