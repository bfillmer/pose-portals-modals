
import {eventChannel} from 'redux-saga'
import {call, take} from 'redux-saga/effects'

import {router} from 'router'
import {ROUTE_HOME} from 'types'

// Route Sagas
import {loadHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, [type]: saga.
const routesMap = {
  [ROUTE_HOME]: loadHome
}

const makeRoutesChannel = () => eventChannel(emitter => {
  router.respond((response) => emitter({response}))
  return () => null
})

// Watch for all actions dispatched that have an action type in our saga routesMap.
export function * routes () {
  const routeChannel = yield call(makeRoutesChannel)
  while (true) {
    const {response} = yield take(routeChannel)
    if (response.name && routesMap[response.name]) {
      yield call(routesMap[response.name])
    }
  }
}
