import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, Typography } from '@mui/material'
import React, { FC } from 'react'

import { ReactComponent as AircraftLeftSVG } from '../../assets/Group_8026.svg'
import { ReactComponent as AircraftRightSVG } from '../../assets/Group_8028.svg'
import { ReactComponent as AvatarSVG } from '../../assets/Group_8424.svg'
import { BottomPrimaryButton } from '../index'

export type ChooseUserPhotoProps = { exist?: boolean; onNext?: () => void }

const ChooseUserPhoto: FC<ChooseUserPhotoProps> = props => {
  const { exist = false } = props

  const handleUpload = () => {
    console.log('handleUpload')
  }
  return (
    <>
      <Box sx={{ height: '240px', mt: '30%', display: 'flex', justifyContent: 'space-around' }}>
        <AircraftLeftSVG />

        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {exist ? (
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
              <AvatarSVG />
              <Typography color='white' sx={{ mt: 1 }}>
                使用已有照片
              </Typography>
              <Button disableElevation size='small' variant='contained' onClick={handleUpload} sx={{ mt: 2 }}>
                <Typography color='white'>重新上传</Typography>
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
              <AvatarSVG />
              <Button disableElevation size='small' variant='contained' onClick={handleUpload} sx={{ mt: 2 }}>
                <Typography color='white'>上传一张本人照片</Typography>
              </Button>
            </Box>
          )}
        </Box>

        <AircraftRightSVG style={{ alignSelf: 'center' }} />
      </Box>

      <BottomPrimaryButton title='下一步' endIcon={<ArrowForwardIcon />} onClick={props.onNext} />
    </>
  )
}

export default ChooseUserPhoto
