
import {fork, select, spawn, take} from 'redux-saga/effects'

import {HOME} from 'types'
import {routeType} from 'selectors'

// Here we would do checks for existing data and load whatever we need for this
// view. Also manage generic tasks such as showing/hiding loaders based on UI
// needs.
function * loadHome () {
  yield console.log('Loading Home Data')
}

const routesMap = {
  [HOME]: loadHome
}

// On application boot we check state to see if we should load anything, then
// we watch for future changes.
function * routes () {
  const initialRoute = yield select(routeType)
  // Run saga in route map that matches initialRoute if exists
  if (routesMap[initialRoute]) {
    yield spawn(routesMap[initialRoute])
  }
  // Watch for future navigation events and run the correct saga if needed.
  while (true) {
    const action = yield take(Object.keys(routesMap))
    yield spawn(routesMap[action.type])
  }
}

export function * sagas () {
  yield fork(routes)
}
