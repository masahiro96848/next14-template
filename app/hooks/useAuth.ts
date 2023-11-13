/**
 * useAuth
 *
 * @package hooks
 */
import { useRouter } from 'next/navigation'
import { loginApi, signUpApi } from '@/apis/authAPI'
import { EventType } from '@/config/event'
import { useCallback, useState } from 'react'

type StateType = {
  email: string
  password: string
}

type ActionType = {
  handleChangeEmail: EventType['onChangeInput']
  handleChangePassword: EventType['onChangeInput']
  handleSignUp: EventType['onSubmit']
  handleLogin: EventType['onSubmit']
}
export const useAuth = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  /**
   * email更新処理
   */
  const handleChangeEmail: EventType['onChangeInput'] = useCallback(
    (event) => setEmail(event.target.value),
    [],
  )

  /**
   * password更新処理
   */
  const handleChangePassword: EventType['onChangeInput'] = useCallback(
    (event) => setPassword(event.target.value),
    [],
  )

  /**
   * 会員登録処理
   */
  const handleSignUp: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault()

      const res = await signUpApi(email, password)
      router.push('/')
      if (res?.code === 401) {
        console.log('register error')
        return
      }
    },
    [email, password],
  )

  /**
   * ログイン処理
   */
  const handleLogin: EventType['onSubmit'] = async (event) => {
    event.preventDefault()

    const res = await loginApi(email, password)
    router.push('/')
    if (res?.code === 401) {
      console.log('register error')
      return
    }
  }

  const states: StateType = {
    email,
    password,
  }

  const actions: ActionType = {
    handleChangeEmail,
    handleChangePassword,
    handleSignUp,
    handleLogin,
  }

  return [states, actions] as const
}
