
import {delay} from 'redux-saga'
import {put} from 'redux-saga/effects'

import {addTask, removeTask} from 'actions'
import {OVERLAY_LOADER} from 'types'

// Here we would do checks for existing data and load whatever we need for this
// view. Also manage generic tasks such as showing/hiding loaders based on UI
// needs.
export function * loadHome () {
  yield put(addTask(OVERLAY_LOADER))
  yield delay(1000)
  yield console.log('Loading Home Data')
  yield put(removeTask(OVERLAY_LOADER))
}
