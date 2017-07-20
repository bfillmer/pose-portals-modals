
import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import {HOME, ABOUT} from 'types'

const routesMap = {
  [HOME]: '/',
  [ABOUT]: '/about'
}

const history = createHistory()

const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap)

export {
  reducer,
  middleware,
  enhancer
}
