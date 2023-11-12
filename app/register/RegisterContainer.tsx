'use client'
import React from 'react'
import { RegisterPresenter } from '@/register/RegisterPresenter'
import { useAuth } from '@/hooks/useAuth'

export const RegisterContainer = () => {
  const [
    { email, password },
    { handleChangeEmail, handleChangePassword, handleSubmit },
  ] = useAuth()

  return (
    <RegisterPresenter
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleSubmit={handleSubmit}
    />
  )
}
