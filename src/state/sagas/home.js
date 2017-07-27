
import {delay} from 'redux-saga'
import {put} from 'redux-saga/effects'

import {addInteraction, removeInteraction, updateName} from 'actions'
import {OVERLAY_LOADER} from 'types'

// Here we would do checks for existing data and load whatever we need for this
// view. Also manage generic tasks such as showing/hiding loaders based on UI
// needs.
export function * loadHome () {
  yield put(addInteraction(OVERLAY_LOADER))
  yield delay(1000)
  yield put(updateName('React'))
  yield put(removeInteraction(OVERLAY_LOADER))
}
