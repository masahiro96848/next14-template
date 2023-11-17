import React from 'react'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <h1>Todo</h1>
    <div>{children}</div>
  </div>
)

export default Layout
