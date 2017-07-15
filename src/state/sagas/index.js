
import {fork, take} from 'redux-saga/effects'

import {HOME} from 'types'

// @BUG @TODO You cannot take the first load action for the default page, unsure why.
function * loadHome () {
  const homeAction = yield take(HOME)
  yield console.log('Loading Home Data', homeAction)
}

function * routes () {
  yield fork(loadHome)
}

export function * sagas () {
  yield fork(routes)
}
