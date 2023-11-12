import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <h1>Sample</h1>
    <div>{children}</div>
  </div>
)

export default Layout
