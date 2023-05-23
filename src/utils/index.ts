import { DEFAULT_TRIP_ACCOUNT, EMPTY_CONTENT, PREFIX_SIGN, SLASH_SUFFIX } from '../constants'
import message from './Message'

export { default as request } from './request'

/**
 * 替换掉年月日的年
 * @param date
 */
export const replaceYearFromDate = (date: string) => {
  const pattern = /\d+-(\d+-\d+)/gi
  if (!pattern.test(date)) {
    return date
  }
  const result = RegExp.$1

  return result.replace('-', '/')
}

/**
 *将数字转换成带计量单位的值
 * @param count
 * @param option
 */
export const decorateValue = (
  count?: string | number | null | undefined | (number | string | null | undefined)[],
  option?: { prefix?: typeof PREFIX_SIGN | string; suffix?: string; split?: string }
) => {
  if (typeof count === 'number' || typeof count === 'string') {
    const countNumber = Number(count)
    let _prefix = option?.prefix || ''
    let _count = countNumber

    if (option?.prefix === PREFIX_SIGN) {
      _prefix = countNumber > 0 ? '+' : countNumber < 0 ? '-' : ''
      _count = Math.abs(_count)
    }

    return _prefix + _count + (option?.suffix || '')
  } else if (Array.isArray(count)) {
    return (
      count.reduce((cur, prev) => (cur ?? EMPTY_CONTENT) + (option?.split || SLASH_SUFFIX) + (prev ?? EMPTY_CONTENT)) +
      (option?.suffix || '')
    )
  } else {
    return EMPTY_CONTENT
  }
}

/**
 * 复制对象
 * @param source
 * @returns {*}
 */
export const simpleClone = source => {
  const type = Object.prototype.toString.call(source) === '[object Object]'
  try {
    return JSON.parse(JSON.stringify(source))
  } catch (e) {
    return type ? {} : []
  }
}

/**
 * 判断当前是否为浏览器环境
 */
export function isBowser() {
  return typeof window !== 'undefined'
}

/**
 * 判断当前是否为服务器环境
 */
export function isServer() {
  return typeof window === 'undefined'
}

type Options = {
  fallback?: any
}
/**
 * 从 localStorage 中获取数据
 * 请与 setLocalStorage 配套使用
 * 不应使用该方法获取 window.localStorage.setItem 方法设置的值（反序列化冗余）
 * @param key
 * @param options
 */
export function getLocalStorage<T>(key: string, options: Options = {}) {
  if (isServer()) return undefined

  const raw = window.localStorage.getItem(key)

  return !raw || raw === 'undefined' || raw === 'null' ? options.fallback : tryParseJsonString<T>(raw)
}

/**
 * 向 localStorage 中存储数据
 * 请与 getLocalStorage 配套使用
 * 使用改方法设置的值不应使用 window.localStorage.getItem 方法获取数据（缺失反序列换过程）
 * @param key
 * @param value
 */
export function setLocalStorage<T>(key: string, value?: T | ((state: T) => void)) {
  if (!isBowser()) return undefined

  let _value = value
  if (typeof value === 'function') {
    const raw = getLocalStorage<T>(key)
    raw && (value as (state: T) => void)(raw)
    _value = raw
  }

  return window.localStorage.setItem(key, JSON.stringify(_value))
}

/**
 * 清空 localStorage 中的数据
 * @param key
 */
export function clearLocalStorage(key?: string) {
  if (!isBowser()) return undefined

  if (key) {
    window.localStorage.removeItem(key)
  } else {
    window.localStorage.clear()
  }
}

export function tryParseJsonString<T>(jsonString: string, errorTip?: string) {
  try {
    return JSON.parse(jsonString || '{}') as T
  } catch (e) {
    console.error(e)
    errorTip && message.warning(errorTip)
  }
}

export const tryPrettierJsonString = (jsonString: string, errorTip?: string) => {
  try {
    return JSON.stringify(JSON.parse(jsonString), null, 2)
  } catch (e) {
    errorTip && message.warning(errorTip)

    return jsonString
  }
}

/**
 * 判断当前账户类型是否是携程账户
 * @param userType 0 1:true 其他:false
 * @returns {boolean}
 */
export const isTripAccount = userType => {
  return DEFAULT_TRIP_ACCOUNT.includes(userType)
}
