import { Box } from '@mui/material'
import React, { FC } from 'react'

const BottomActionWrapper: FC<{ children: React.ReactNode }> = props => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: '85%',
        width: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {props.children}
    </Box>
  )
}

export default BottomActionWrapper
