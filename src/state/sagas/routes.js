
import {call, cancel, fork, select, take, takeLatest} from 'redux-saga/effects'

import {ROUTE_HOME} from 'types'
import {routeType} from 'selectors'

import {ROUTE_TYPES} from 'state/routes'

// Route Sagas
import {loadHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: loadHome
}

const SAGA_ROUTE_TYPES = Object.keys(routesMap)

// Spawn the saga associated with the route type.
function * handleRouteChange ({type}) {
  yield call(routesMap[type])
}

// Watch for all actions dispatched that have an action type in our saga routesMap.
export function * routes () {
  yield takeLatest(SAGA_ROUTE_TYPES, handleRouteChange)
  // On initial load of the application we check our state for a route and run the necessary saga
  // if needed. When the route changes we forcibly cancel the initial route's saga. This is handled
  // by takeLatest for all subsequent routes.
  const initialRoute = yield select(routeType)
  if (routesMap[initialRoute]) {
    const initialFork = yield fork(routesMap[initialRoute])
    yield take(ROUTE_TYPES)
    yield cancel(initialFork)
  }
}
