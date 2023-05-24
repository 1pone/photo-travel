import { Box } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import { ReactComponent as GreetingSVG } from '../assets/Greeting.svg'
import { ReactComponent as PlanetSVG } from '../assets/Group_8024.svg'

const PageWrapper: FC<{ children: ReactNode }> = props => (
  <Box
    sx={{
      p: 4,
      height: '100vh',
      position: 'relative',
      background: 'linear-gradient(-46.38deg, rgba(51.29,98.31,191.25,1.00) 32.218%,rgba(114,146,207,1.00) 133.918%)'
    }}
  >
    <Box sx={{ py: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ pt: 4 }}>
        <GreetingSVG />
      </Box>
      <PlanetSVG />
    </Box>

    {props.children}
  </Box>
)

export default PageWrapper
