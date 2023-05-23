import React from 'react'

import Exception404 from '../pages/Exception/404'
import Exception500 from '../pages/Exception/500'


export default [
  {
    path: '/',
    element:  <Exception500 />
  },
  {
    path: '/500',
    element: <Exception500 />
  },
  {
    path: '*',
    element: <Exception404 />
  }
]
