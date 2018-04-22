
import Browser from '@hickory/browser'
import curi from '@curi/core'

// ROUTE IDENTIFIERS
export const ROUTE_HOME = 'route/HOME'
export const ROUTE_ABOUT = 'route/ABOUT'

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
