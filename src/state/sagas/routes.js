
import {LOCATION_CHANGE} from '@curi/redux'
import {call, takeEvery} from 'redux-saga/effects'

import {ROUTE_HOME} from 'types'

// Route Sagas
import {init as initHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: initHome
}

// Given our route maps to one we want to run a saga for we do so.
// @TODO Fork and cancel on change.
function * handleLocationChange ({response}) {
  if (response.name && routesMap[response.name]) {
    yield call(routesMap[response.name])
  }
}

// Watch for all actions dispatched that have an action type in our saga routesMap.
export function * routes () {
  yield takeEvery(LOCATION_CHANGE, handleLocationChange)
}
