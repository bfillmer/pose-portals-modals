
import {applyMiddleware, compose, createStore} from 'redux'

import {middleware as routesMiddleware, enhancer as routesEnhancer} from 'state/routes'
import {reducers} from 'state/reducers'

const composeMiddlewares = applyMiddleware(routesMiddleware)

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  reducers,
  composeEnhancers(routesEnhancer, composeMiddlewares)
)
