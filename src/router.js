
import Browser from '@hickory/browser'
import curi from '@curi/core'
import scrollEffect from '@curi/side-effect-scroll'

// ROUTE IDENTIFIERS
export const ROUTE_HOME = 'route/HOME'
export const ROUTE_404 = 'route/404'

export const history = Browser()

const routes = [
  {
    name: ROUTE_HOME,
    path: ''
  },
  {
    name: ROUTE_404,
    path: '(.*)'
  }
]

const scrollTo = scrollEffect()

export const router = curi(history, routes, {
  sideEffects: [{ effect: scrollTo, after: true }]
})
