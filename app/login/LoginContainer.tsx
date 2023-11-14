'use client'
import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoginPresenter } from '@/login/LoginPresenter'
import { loginApi } from '@/apis/authAPI'
import { EventType } from '@/config/event'

export const LoginContainer = () => {
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

  return (
    <LoginPresenter
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleLogin={handleLogin}
    />
  )
}
