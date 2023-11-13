'use client'
import React from 'react'

import { useAuth } from '@/hooks/useAuth'
import { LoginPresenter } from '@/login/LoginPresenter'

export const LoginContainer = () => {
  const [
    { email, password },
    { handleChangeEmail, handleChangePassword, handleLogin },
  ] = useAuth()

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
