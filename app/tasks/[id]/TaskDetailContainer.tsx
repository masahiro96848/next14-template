'use client'
import React, { useEffect, useState } from 'react'
import { TaskDetailPresenter } from '@/tasks/[id]/TaskDetailPresenter'
import { useParams } from 'next/navigation'
import { fetchTaskApi } from '@/apis/taskAPI'
import { TaskType } from '@/types/Task'

export const TaskDetailContainer = () => {
  const [task, setTask] = useState<TaskType | undefined>(undefined)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTaskApi(1)
        if (response.code === 200 && response !== undefined) {
          setTask(response.data)
        } else {
          console.error('Error fetching task list')
        }
      } catch (error) {
        console.error('Error fetching task list', error)
      }
    }

    fetchData()
  }, [])

  return <TaskDetailPresenter task={task} />
}
