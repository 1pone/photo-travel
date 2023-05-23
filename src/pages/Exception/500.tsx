import { Button, Typography } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(13)
  }
}))
const Error500 = () => {
  const nav = useNavigate()

  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h1'>500</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Internal server error 👨🏻‍💻
          </Typography>
          <Typography variant='body2'>Oops, something went wrong!</Typography>
        </BoxWrapper>
        <Img height='487' alt='error-illustration' src='/images/pages/500.png' />
        <Button component='a' variant='contained' sx={{ px: 5.5 }} onClick={() => nav('/')}>
          Back to Home
        </Button>
      </Box>
    </Box>
  )
}

export default Error500
