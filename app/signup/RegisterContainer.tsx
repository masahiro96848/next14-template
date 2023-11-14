'use client'
import React, { useCallback, useState } from 'react'
import { RegisterPresenter } from '@/signup/RegisterPresenter'
import { signUpApi } from '@/apis/authAPI'
import { EventType } from '@/config/event'
import { useRouter } from 'next/navigation'

export const RegisterContainer = () => {
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
  const handleSignUp: EventType['onSubmit'] = async (event) => {
    event.preventDefault()
    const res = await signUpApi(email, password)
    router.push('/')
    if (res?.code === 401) {
      console.log('register error')
      return
    }
  }

  return (
    <RegisterPresenter
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleSubmit={handleSignUp}
    />
  )
}
