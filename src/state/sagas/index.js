
import {fork, take} from 'redux-saga/effects'

import {HOME} from 'types'

function * loadHome () {
  yield console.log('loadHome Running')
  yield take(HOME)
  yield console.log('Loaded Home Data')
}

function * routes () {
  yield fork(loadHome)
  yield console.log('Routes Booted')
}

export function * sagas () {
  yield fork(routes)
  yield console.log('Sagas Booted')
}
