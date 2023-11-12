'use client'
import React from 'react'
import { RegisterPresenter } from '@/signup/RegisterPresenter'
import { useAuth } from '@/hooks/useAuth'

export const RegisterContainer = () => {
  const [
    { email, password },
    { handleChangeEmail, handleChangePassword, handleSignUp },
  ] = useAuth()

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
