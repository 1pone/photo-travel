import React from 'react'

import Create from '../pages/Create'
import Detail from '../pages/Detail'
import Join from '../pages/Join'

export default [
  {
    path: '/',
    element: <Create />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/join/:ptId',
    element: <Join />
  },
  {
    path: '/detail/:ptId',
    element: <Detail />
  }
]
