import { Button, ButtonProps } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import BottomActionWrapper from './BottomActionWrapper'
export type BottomPrimaryButtonProps = ButtonProps & { title?: ReactNode }

const BottomPrimaryButton: FC<ButtonProps> = props => {
  return (
    <BottomActionWrapper>
      <Button disableElevation variant='contained' sx={{ width: '70%' }} {...props}>
        {props.title}
      </Button>
    </BottomActionWrapper>
  )
}

export default BottomPrimaryButton
