/**
 * AuthContext
 *
 * @package contexts
 */

import { UserType } from '@/types/User'
import { FC, ReactNode, createContext, useContext } from 'react'

type Props = {
  children: ReactNode
}

interface ContextInterface {
  user: UserType | undefined
  isAuth: boolean
  logIn: (user: UserType) => Promise<void>
  logOut: () => Promise<void>
}

const AuthContext = createContext({} as ContextInterface)

/**
 * AuthProvider
 * @param children
 * @returns
 */
export const AuthProvider: FC<Props> = ({ children }) => {
  return <></>
}

export const useAuthContext = () => useContext(AuthContext)
