import { Button, ButtonProps } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import BottomActionWrapper from './BottomActionWrapper'
export type BottomPrimaryButtonProps = ButtonProps & { title?: ReactNode }

const BottomPrimaryButton: FC<
  BottomPrimaryButtonProps & { secondaryButtonProps?: BottomPrimaryButtonProps }
> = props => {
  const { secondaryButtonProps, ...primaryProps } = props
  return (
    <BottomActionWrapper>
      <Button disableElevation variant='contained' sx={{ width: '70%' }} {...primaryProps}>
        {props.title}
      </Button>

      {secondaryButtonProps && (
        <Button disableElevation size='small' variant='text' sx={{ mt: 2, color: '#eee' }} {...secondaryButtonProps}>
          {secondaryButtonProps.title}
        </Button>
      )}
    </BottomActionWrapper>
  )
}

export default BottomPrimaryButton
