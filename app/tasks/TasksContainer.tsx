'use client'
import React, { useEffect, useState } from 'react'
import { TasksPresenter } from '@/tasks/TasksPresenter'
import { deleteTaskApi, fetchTaskListApi } from '@/apis/taskAPI'
import { TaskType } from '@/types/Task'

export const TasksContainer = () => {
  const [tasks, setTasks] = useState<TaskType[] | undefined>(undefined)

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
  useEffect(() => {
    fetchData()
  }, [])

  /**
   * Task削除処理
   */
  const handleDeleteTask = async (taskId: number) => {
    try {
      const response = await deleteTaskApi(taskId)
      if (response.code === 200 && response !== undefined) {
        setTasks((prevTasks: TaskType[] | undefined) =>
          prevTasks ? prevTasks.filter((task) => task.id !== taskId) : [],
        )
      } else {
        console.error('Error deleting task:', response.message)
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  if (tasks === undefined) {
    // ローディング状態の処理も追加できます
    return <div>Loading...</div>
  }

  return <TasksPresenter tasks={tasks} handleDeleteTask={handleDeleteTask} />
}
