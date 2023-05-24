import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, ToggleButton, Typography } from '@mui/material'
import React, { FC } from 'react'

import { ReactComponent as BoySVG } from '../../assets/Group_8023.svg'
import { BottomPrimaryButton, StyledToggleButtonGroup } from '../../components'

export type ScenicSpotProps = { value: string; onChange?: (value: string) => void; onNext?: () => void }
const ScenicSpot: FC<ScenicSpotProps> = props => {
  return (
    <>
      <Box sx={{ mt: '15%' }}>
        <Typography gutterBottom variant='h6' color='white'>
          请选择旅游城市
        </Typography>
        <StyledToggleButtonGroup
          exclusive
          size='small'
          value={props.value}
          onChange={(e, value) => {
            props.onChange?.(value)
          }}
          aria-label='text alignment'
        >
          <ToggleButton value='left' aria-label='left aligned'>
            <Box>
              <img src='/images/scenic_spot_0.png' alt='scenic_spot' style={{ width: '64px' }} />
              <Typography color='white'>北京</Typography>
            </Box>
          </ToggleButton>
          <ToggleButton value='center' aria-label='centered'>
            <Box>
              <img src='/images/scenic_spot_1.png' alt='scenic_spot' style={{ width: '64px' }} />
              <Typography color='white'>上海</Typography>
            </Box>
          </ToggleButton>
          <ToggleButton value='right' aria-label='right aligned'>
            <Box>
              <img src='/images/scenic_spot_2.png' alt='scenic_spot' style={{ width: '64px' }} />
              <Typography color='white'>云南</Typography>
            </Box>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Box>

      <BoySVG style={{ zIndex: 0, position: 'absolute', width: '125%', left: '-44px', bottom: '10%' }} />

      <BottomPrimaryButton title='出 发' endIcon={<ArrowForwardIcon />} onClick={props.onNext} />
    </>
  )
}

export default ScenicSpot
