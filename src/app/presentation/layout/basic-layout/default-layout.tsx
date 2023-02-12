import { type ReactNode } from 'react'

import { Box } from '@mui/material'

interface Props {
  children: ReactNode
}
const BasicLayout = ({}: Props) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

export default BasicLayout
