/**
 * useAuth
 *
 * @package hooks
 */
import { signUpApi } from '@/apis/authAPI'
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
}
export const useAuth = () => {
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
      if (res?.code === 401) {
        console.log('register error')
        return
      }
    },
    [email, password],
  )

  const states: StateType = {
    email,
    password,
  }

  const actions: ActionType = {
    handleChangeEmail,
    handleChangePassword,
    handleSignUp,
  }

  return [states, actions] as const
}
