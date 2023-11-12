import React from 'react'
import { EventType } from '../config/event'

type Props = {
  email: string
  password: string
  handleChangeEmail: EventType['onChangeInput']
  handleChangePassword: EventType['onChangeInput']
  handleSubmit: EventType['onSubmit']
}
export const RegisterPresenter = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
}: Props) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>新規登録</button>
      </form>
    </div>
  )
}
