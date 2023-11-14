'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { logOutApi } from './apis/authAPI'

export default function Home() {
  const handleLogOut = async () => {
    await logOutApi()
  }
  return <button onClick={handleLogOut}>ログアウト</button>
}
