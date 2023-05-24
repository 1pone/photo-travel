import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { BottomPrimaryButton } from '../../components'

export type TargetTravelProps = {
  ptId: string
  onNext?: () => void
}

const TargetTravel: FC<TargetTravelProps> = props => {
  const nav = useNavigate()
  const { ptId } = useParams()

  return (
    <>
      <Box sx={{ mt: '30%' }}>
        <Typography variant={'button'} color='white' sx={{ mt: 1 }}>
          {'小红'} 想和你一起去 {'西藏'}
        </Typography>
        <img
          src={'/images/generatedPhoto.png'}
          alt='generatedPhoto'
          style={{ width: '100%', borderRadius: '24px', padding: '8px' }}
        />
      </Box>

      <BottomPrimaryButton
        title='加 入'
        endIcon={<ArrowForwardIcon />}
        onClick={props.onNext}
        secondaryButtonProps={{ title: '发起新的旅行', onClick: () => nav('/create') }}
      />
    </>
  )
}

export default TargetTravel
