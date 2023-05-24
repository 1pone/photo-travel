import { Warning } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  errorData?: {
    error: Error
    errorInfo: ErrorInfo
  }
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorData: undefined
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorData: { error, errorInfo } })
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { error, errorInfo } = this.state.errorData || {}
    if (this.state.hasError) {
      return (
        <Box px={2}>
          <Typography gutterBottom variant='h6'>
            <Warning /> Uncaught error: {error?.message}
          </Typography>
          <Typography>{errorInfo?.componentStack}</Typography>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
