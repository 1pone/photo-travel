/**
 * notistack 全局实例化，在组件外可以调用，如 Request 请求中...
 * https://github.com/iamhosseindhv/notistack/issues/30
 */
import { SnackbarProvider, useSnackbar, VariantType, WithSnackbarProps } from 'notistack'
import React from 'react'

let useSnackbarRef: WithSnackbarProps

const Message = {
  success(msg: string) {
    this.toast(msg, 'success')
  },
  warning(msg: string) {
    this.toast(msg, 'warning')
  },
  info(msg: string) {
    this.toast(msg, 'info')
  },
  error(msg: string) {
    this.toast(msg, 'error')
  },
  toast(msg: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, { variant })
  }
}
export default Message

export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar()

  return null
}
export { SnackbarProvider }
