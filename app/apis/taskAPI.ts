import { AxiosResponse } from 'axios'
import globalAxios, {
  isAxiosError,
  ResponseType,
  IErrorResponse,
} from '@/config/globalAxios'
import { TaskType } from '@/types/Task'

/**
 * Taskリストの取得API
 * @returns
 */
export const fetchTaskListApi = async () => {
  try {
    const { data }: AxiosResponse<TaskType[]> = await globalAxios.get('/tasks')
    const res: ResponseType<TaskType[]> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}

/**
 * idに紐づく単一のTask取得API
 * @param id
 * @returns
 */
export const fetchTaskApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TaskType> = await globalAxios.get(
      `/tasks/${id}`,
    )
    const res: ResponseType<TaskType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}

/**
 * Taskの作成処理のAPI
 * @param title
 * @returns
 */
export const createTaskApi = async (title: string) => {
  try {
    const { data }: AxiosResponse<TaskType> = await globalAxios.post('/tasks', {
      title,
    })
    const res: ResponseType<TaskType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}

/**
 * Taskの更新処理のAPI
 * @param id
 * @param title
 * @returns
 */
export const updateTaskApi = async (id: number, title: string) => {
  try {
    const { data }: AxiosResponse<TaskType> = await globalAxios.put(
      `/tasks/update/${id}`,
      {
        title,
      },
    )
    const res: ResponseType<TaskType> = {
      code: 200,
      data,
    }
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}

/**
 * Task削除処理のAPI
 * @param id
 * @returns
 */
export const deleteTaskApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TaskType> = await globalAxios.delete(
      `tasks/${id}`,
    )
    const res: ResponseType<TaskType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}
