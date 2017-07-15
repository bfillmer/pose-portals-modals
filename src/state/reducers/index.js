
import {combineReducers} from 'redux'

import {reducer as routesReducer} from 'state/routes'

export const reducers = combineReducers({
  location: routesReducer
})
