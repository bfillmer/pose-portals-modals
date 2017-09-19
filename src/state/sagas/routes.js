
import {select, spawn, takeEvery} from 'redux-saga/effects'

import {ROUTE_HOME} from 'types'
import {routeType} from 'selectors'

// Route Sagas
import {loadHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: loadHome
}

// Spawn the saga associated with the route type.
function * handleRouteChange ({type}) {
  yield spawn(routesMap[type])
}

// Watch for all actions dispatched that have an action type in our routesMap.
export function * routes () {
  const initialRoute = yield select(routeType)
  if (routesMap[initialRoute]) {
    yield spawn(routesMap[initialRoute])
  }
  yield takeEvery(Object.keys(routesMap), handleRouteChange)
}
