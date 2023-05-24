import { Box } from '@mui/material'
import React, { FC } from 'react'

const BottomActionWrapper: FC<{ children: React.ReactNode }> = props => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        bottom: '10%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      {props.children}
    </Box>
  )
}

export default BottomActionWrapper
