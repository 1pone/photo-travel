import { Box } from '@mui/material'
import React, { FC, ReactNode } from 'react'

const PageWrapper: FC<{ children: ReactNode }> = props => (
  <Box
    sx={{
      p: 4,
      height: '100vh',
      position: 'relative',
      background: 'linear-gradient(-46.38deg, rgba(51.29,98.31,191.25,1.00) 32.218%,rgba(114,146,207,1.00) 133.918%)'
    }}
  >
    {props.children}
  </Box>
)

export default PageWrapper
