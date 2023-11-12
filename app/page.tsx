'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Container, Box, Card, Typography, Button } from '@mui/material'
import { registerApi } from '@/apis/authAPI'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const handleChangeEmail = (event: any) => setEmail(event.target.value)

  return (
    <main>
      <Container>
        <Box>
          <Card>
            <input type="text" value={email} onChange={handleChangeEmail} />
          </Card>
        </Box>
      </Container>
    </main>
  )
}
