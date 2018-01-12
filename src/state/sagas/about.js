
import {select} from 'redux-saga/effects'

import {aboutStep} from 'selectors'

// @HACK Quick example showing checking for data and loading only if we don't have. Would be
// derived from application state.
let haveData = false

export function * init () {
  // Load any data for all /about sub-routes. Perform check if as to whether we should perform
  // API calls or whatnot.
  if (!haveData) {
    yield console.log('Loading About Route Data')
    haveData = true
  }
  // Get current step, do step related logic.
  const step = yield select(aboutStep)
  yield console.log('Step', step)
}
