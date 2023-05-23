import { alpha, Backdrop, Box, CircularProgress, useTheme } from '@mui/material'
import React, { FC, ReactNode } from 'react'

type LoadingWrapperProps = {
  loading?: boolean
  children?: ReactNode
}
const LoadingWrapper: FC<LoadingWrapperProps> = props => {
  const theme = useTheme()

  return (
    <Box>
      {props.children}
      <Backdrop open={props.loading} sx={{ backgroundColor: alpha(theme.palette.background.default, 0.5) }}>
        {<CircularProgress />}
      </Backdrop>
    </Box>
  )
}

export default LoadingWrapper
