
import {LOCATION_CHANGE} from '@curi/redux'
import {call, takeEvery} from 'redux-saga/effects'

// import {router} from 'router'
import {ROUTE_ABOUT, ROUTE_HOME} from 'types'

// Route Sagas
import {init as initHome} from 'state/sagas/home'
import {init as initAbout} from 'state/sagas/about'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: initHome,
  [ROUTE_ABOUT]: initAbout
}

// Given our route maps to one we want to run a saga for we do so.
function * handleLocationChange ({response}) {
  if (response.name && routesMap[response.name]) {
    yield call(routesMap[response.name])
  }
}

// Watch for all actions dispatched that have an action type in our saga routesMap.
export function * routes () {
  yield takeEvery(LOCATION_CHANGE, handleLocationChange)
}
