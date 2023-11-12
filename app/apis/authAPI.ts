import { AxiosResponse } from 'axios'
import globalAxios, { IErrorResponse, isAxiosError } from '@/config/globalAxios'

/**
 * 新規登録API
 * @param email
 * @param password
 * @returns void
 */
export const registerApi = async (email: string, password: string) => {
  try {
    const data = await globalAxios.post('/signup', {
      email,
      password,
    })
    const res = {
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
