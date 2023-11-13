import React from 'react'
import { EventType } from '@/config/event'

type Props = {
  email: string
  password: string
  handleChangeEmail: EventType['onChangeInput']
  handleChangePassword: EventType['onChangeInput']
  handleLogin: EventType['onSubmit']
}
export const LoginPresenter = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleLogin,
}: Props) => {
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button>ログイン</button>
      </form>
    </div>
  )
}
