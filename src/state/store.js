
import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import {sagas} from 'state/sagas'
import {
  middleware as routesMiddleware,
  enhancer as routesEnhancer
} from 'state/routes'
import {reducers} from 'state/reducers'

const sagasMiddleware = createSagaMiddleware()

const composeMiddlewares = applyMiddleware(routesMiddleware, sagasMiddleware)

// Use Redux DevTools Extension in development.
const composeEnhancers = (enhancer, middlewares) =>
  typeof window !== 'undefined'
    ? composeWithDevTools(middlewares, enhancer)
    : compose(enhancer, middlewares)

export const store = createStore(
  reducers,
  composeEnhancers(routesEnhancer, composeMiddlewares)
)

sagasMiddleware.run(sagas)
