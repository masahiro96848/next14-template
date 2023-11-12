import React from 'react'
import { RegisterPresenter } from '@/register/RegisterPresenter'
import { registerApi } from '@/apis/authAPI'

export const RegisterContainer = () => {
  const register = async () => {
    'use server'
    const res = await registerApi('test01@sample.com', 'password')
  }
  return <RegisterPresenter />
}
