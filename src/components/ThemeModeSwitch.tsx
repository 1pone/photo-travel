import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React, { useMemo } from 'react'

import { useBaseStore } from '../store'

export default function ThemeModeSwitch() {
  const { theme, setTheme } = useBaseStore()

  const newTheme = useMemo(() => (theme === 'light' ? 'dark' : 'light'), [theme])

  return (
    <Tooltip title={`Turn to ${newTheme} mode`}>
      <IconButton color='primary' onClick={() => setTheme(newTheme)}>
        {theme === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
    </Tooltip>
  )
}
