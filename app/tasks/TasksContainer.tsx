'use client'
import React, { useEffect, useState } from 'react'
import { TasksPresenter } from '@/tasks/TasksPresenter'
import { fetchTaskListApi } from '@/apis/taskAPI'
import { TaskType } from '@/types/Task'

export const TasksContainer = () => {
  const [tasks, setTasks] = useState<TaskType[] | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTaskListApi()
        if (response.code === 200 && response !== undefined) {
          setTasks(response.data)
        } else {
          console.error('Error fetching task list')
        }
      } catch (error) {
        console.error('Error fetching task list', error)
      }
    }

    fetchData()
  }, [])

  if (tasks === undefined) {
    // ローディング状態の処理も追加できます
    return <div>Loading...</div>
  }

  return <TasksPresenter tasks={tasks} />
}
