import { TranslateOutlined } from '@mui/icons-material'
import { IconButton, IconButtonProps, Menu, MenuItem, MenuProps, Typography } from '@mui/material'
import React from 'react'

import { useBaseStore } from '../store'

const LanguageButton = (props: IconButtonProps & { menuProps?: MenuProps }) => {
  const { menuProps, ...buttonProps } = props

  const { setLang } = useBaseStore()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton color='primary' size='small' onClick={handleClick} sx={{ ml: 1, p: 1 }} {...buttonProps}>
        <TranslateOutlined />
      </IconButton>

      <Menu open={open} anchorEl={anchorEl} onClose={handleClose} {...menuProps}>
        <MenuItem value='en' onClick={() => setLang('en')}>
          <Typography>En</Typography>
        </MenuItem>

        <MenuItem value='zh-CN' onClick={() => setLang('zh-CN')}>
          <Typography>中文</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default LanguageButton
