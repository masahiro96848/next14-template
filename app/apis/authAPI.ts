import { AxiosResponse } from 'axios'
import globalAxios, {
  IErrorResponse,
  ResponseType,
  isAxiosError,
} from '@/config/globalAxios'
import { AuthResponseType, UserType } from '@/types/User'

/**
 * 新規登録API
 * @param email
 * @param password
 * @returns
 */
export const signUpApi = async (email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/signup',
      {
        email,
        password,
      },
    )
    const res: ResponseType<AuthResponseType> = {
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

export const loginApi = async (email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/login',
      {
        email,
        password,
      },
    )
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res = {
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

export const logOutApi = async () => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/logout',
    )
    const res: ResponseType<AuthResponseType> = {
      code: 200,
    }
    return res
  } catch (err) {
    const res = {
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
