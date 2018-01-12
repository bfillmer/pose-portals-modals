
import {eventChannel} from 'redux-saga'
import {call, take} from 'redux-saga/effects'

import {router} from 'state/routes'
import {ROUTE_HOME} from 'types'
// import {routeType} from 'selectors'

// Route Sagas
import {loadHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: loadHome
}

// const SAGA_ROUTE_TYPES = Object.keys(routesMap)

const watchRouting = () => eventChannel(emitter => {
  router.respond((response) => emitter({response}))
  return () => null
})

// Watch for all actions dispatched that have an action type in our saga routesMap.
export function * routes () {
  const channel = yield call(watchRouting)
  while (true) {
    const {response} = yield take(channel)
    if (response.name && routesMap[response.name]) {
      yield call(routesMap[response.name])
    }
  }
}
