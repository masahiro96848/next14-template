'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Box, Card, Typography, Button } from '@mui/material'
import { registerApi } from '@/apis/authAPI'
import axios from 'axios'

export default function Home() {
  axios.defaults.withCredentials = true
  const handleRegister = async () => {
    const res = await registerApi('test01@sample.com', 'password')
    if (res?.code === 401) {
      console.log('error')
      return
    }
  }
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Button onClick={handleRegister}>新規登録</Button>
          </Card>
        </Box>
      </Container>
    </main>
  )
}
