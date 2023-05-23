import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import React from 'react'
import { useRoutes } from 'react-router-dom'

import router from './router'
import { SnackbarProvider, SnackbarUtilsConfigurator } from './utils/Message'

const App = () => {
  const routesContent = useRoutes(router)

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />

      <GlobalStyles styles={{}} />
      <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <SnackbarUtilsConfigurator />
        {routesContent}
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
