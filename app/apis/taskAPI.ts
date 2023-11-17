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
 */
export const fetchTaskApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TaskType[]> = await globalAxios.get(
      `/tasks/${id}`,
    )
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
 * Taskの作成API
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
