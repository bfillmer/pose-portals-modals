
import {call, cancel, fork, select, take, takeLatest} from 'redux-saga/effects'

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
  yield call(routesMap[type])
}

// Watch for all actions dispatched that have an action type in our routesMap.
export function * routes () {
  const ROUTE_TYPES = Object.keys(routesMap)
  yield takeLatest(ROUTE_TYPES, handleRouteChange)
  // On initial load of the application we check our state for a route and run the necessary saga
  // if needed.
  const initialRoute = yield select(routeType)
  if (routesMap[initialRoute]) {
    const initialFork = yield fork(routesMap[initialRoute])
    yield take(ROUTE_TYPES)
    yield cancel(initialFork)
  }
}
