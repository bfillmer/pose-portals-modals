
import {fork} from 'redux-saga/effects'

import {routes} from 'state/sagas/routes'
import {autoRestart} from 'state/sagas/utils'

const autoRestartRoutes = autoRestart(routes)

export function * sagas () {
  yield fork(autoRestartRoutes)
}
