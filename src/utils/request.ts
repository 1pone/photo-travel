// 格式化数据的第三方库
import qs from 'qs'

import { AUTH_KEY } from '../constants/localStorageKey'
import { getLocalStorage } from './index'
import Message from './Message'

export type BaseRes<D> = {
  data: D
  msg: string
  status: number
}

/**
 * 封装的fetch函数，传入url(必须)和一个参数对象(可选)，这是fetch的需求参数
 */
export default function request<Res>(
  url: string,
  options: {
    type?: 'json' | 'urlencoded'
    method: 'GET' | 'POST'
    params?: any
    credentials?: 'include' | 'same-origin' | 'omit'
    headers?: { Accept?: string; 'Content-Type'?: string; authorization?: string }
    body?: any
    resMiddleware?: (res) => void
  } = {
    type: 'json',
    method: 'POST'
  }
) {
  // 最后添加携带的数据格式，这个根据需求填写
  options.headers = Object.assign(options.headers || {}, {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  /**
   * 添加authorization
   */
  const authorization = getLocalStorage<string>(AUTH_KEY)
  authorization && (options.headers.authorization = authorization)

  // Get的请求处理
  !options.method ? (options.method = 'GET') : null

  // 如果options中具有params参数，进行处理
  if (options.params) {
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)) {
      // 判断当前url中是否有问号，如果有，就用&，如果没有，就用问号，作为拼接参数的连接符
      const ask = url.includes('?') ? '&' : '?'

      // 如果请求时GET请求，把所有params参数添加到url中，通过qs库将对象拼接为xxx=xxx&yyy=yyy的格式
      url += `${ask}${qs.stringify(options.params)}`
    }

    // params不是fetch中自带的有效参数，fetch不支持该参数，需要在发送请求前将其删除
    delete options.params
  }

  /**
   * POST请求的处理
   */
  if (/^(POST|PUT)$/i.test(options.method)) {
    // 读取传入的数据格式类型参数type，如果没有传入type，默认为json格式
    !options.type ? (options.type = 'json') : null

    if (options.type === 'urlencoded') {
      // 处理数据体，使用qs进行格式化
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      options.body = qs.stringify(options.body)
    }
    if (options.type === 'json') {
      // json格式使用JSON库进行格式化
      options.headers['Content-Type'] = 'application/json'
      options.body = JSON.stringify(options.body || '{}')
    }
  }

  /**
   * 全部配置好之后，最后使用fetch发起一个请求，它本身需要传入一个url和一个options
   */
  return new Promise<Res>((resolve, reject) => {
    return fetch(url, options)
      .then(response => {
        // fetch与ajax(axios)不同，只要服务器有返回值，都是成功，没有返回值才算失败。
        // 所以要在这里进行处理所有返回的结果
        if (!/^(2|3)\d{2}$/.test(response.status.toString())) {
          // 失败的状态，非2|3开头的状态，进行处理
          switch (response.status) {
            case 401:
              // 权限不够，一般是未登录
              Message.error(codeMessage['401'])
              break
            case 403:
              // 服务器已经接受，但是拒绝访问，通常是登录过期
              Message.error(codeMessage['403'])
              break
            case 404:
              // 找不到资源
              break
            case 503:
              // TODO 跳转登录页
              console.error('request error 503', url)
              Message.error(codeMessage['503'])
              break
          }
        }

        // 处理之后，将response的所有数据转换成json，客户端就可以拿到以json格式响应的所有数据
        return response.json()
      })
      .then((res: BaseRes<Res>) => (options.resMiddleware ? options.resMiddleware(res) : resolve(res.data)))
      .catch(error => {
        // 什么都没有，返回一个错误
        return reject(error)
      })
  })
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  499: '账号未登录',
  409: '当前账号没有此接口的访问权限',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}
