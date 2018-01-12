
import Browser from '@hickory/browser'
import curi from '@curi/core'

import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

export const history = Browser()

const routes = [
  {
    name: ROUTE_ABOUT,
    path: 'about'
  },
  {
    name: ROUTE_HOME,
    path: '(.*)'
  }
]

export const router = curi(history, routes)
