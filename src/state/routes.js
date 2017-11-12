
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

const routesMap = {
  [ROUTE_HOME]: '/',
  [ROUTE_ABOUT]: '/about'
}

export const ROUTE_TYPES = Object.keys(routesMap)

const history = createHistory()

export const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap)
