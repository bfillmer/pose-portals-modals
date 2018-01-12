
import {select} from 'redux-saga/effects'

import {aboutStep} from 'selectors'

export function * init () {
  // Load any data for all /about sub-routes. Perform check if as to whether we should perform
  // API calls or whatnot.
  yield console.log('Loading About Route Data')
  // Get current step, do step related logic.
  const step = yield select(aboutStep)
  yield console.log('Step', step)
}
