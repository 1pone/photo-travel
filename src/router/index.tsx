import React from 'react'

import Create from '../pages/Create'
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
  }
]
