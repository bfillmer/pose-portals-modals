
import {createStore, compose} from 'redux'

import {reducers} from 'state/reducers'

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  reducers,
  composeEnhancers()
)
