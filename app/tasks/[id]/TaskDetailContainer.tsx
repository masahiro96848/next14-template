'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { TaskDetailPresenter } from '@/tasks/[id]/TaskDetailPresenter'
import { useParams, useRouter } from 'next/navigation'
import { fetchTaskApi } from '@/apis/taskAPI'
import { TaskType } from '@/types/Task'

export const TaskDetailContainer = () => {
  const router = useParams()
  const targetId = router.id
  const [task, setTask] = useState<TaskType | undefined>(undefined)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchTaskApi(Number(targetId))
      if (response.code === 200 && response !== undefined) {
        setTask(response?.data ? response.data : undefined)
      } else {
        console.error('Error fetching task list')
      }
    } catch (error) {
      console.error('Error fetching task list', error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  return <TaskDetailPresenter task={task} />
}
