
import Browser from '@hickory/browser'
import curi from '@curi/core'

import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

const history = Browser()

const routes = [
  {
    name: ROUTE_HOME,
    path: ''
  },
  {
    name: ROUTE_ABOUT,
    path: 'about'
  }
]

export const router = curi(history, routes)

// subscribe to the router object with a function
// that will be called whenever the location changes
// router.respond((response, action) => {
//   // handle any rendering inside of this function
// });

//
// import {connectRoutes} from 'redux-first-router'
// import createHistory from 'history/createBrowserHistory'
//
// import {ROUTE_HOME, ROUTE_ABOUT} from 'types'
//
// const routesMap = {
//   [ROUTE_HOME]: '/',
//   [ROUTE_ABOUT]: '/about'
// }
//
// export const ROUTE_TYPES = Object.keys(routesMap)
//
// const history = createHistory()
//
// export const {
//   reducer,
//   middleware,
//   enhancer
// } = connectRoutes(history, routesMap)
