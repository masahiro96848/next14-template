'use client'
import { ApplicationContainer } from '@/_shared/components/parts/ApplicationContainer/ApplicationContainer'
import { registerApi } from '@/apis/authAPI'
import { Button } from '@mui/material'
import React from 'react'

type Props = {
  event: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const RegisterPresenter = async () => {
  'use server'
  const res = await registerApi('test01@sample.com', 'password')
  return <div>{/* <Button>新規登録</Button> */}</div>
}
