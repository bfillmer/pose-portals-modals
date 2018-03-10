
import {call, fork} from 'redux-saga/effects'

// ========================================
// SPORK: A safe fork. #dadjoke
// ========================================

// Default error handler, could log or display within the UI.
function * defaultError (e) {
  yield console.error(e)
}

// The actual fork is done on this wrap saga, which literally wraps our saga in a try/catch
// and error handler for us.
function * wrap (saga, handleError, args) {
  try {
    yield call(saga, ...args)
  } catch (e) {
    yield call(handleError, e)
  }
}

/**
 * Safely fork a saga that handles it's own errors and prevents crashing upward into it's parent
 * saga when an error occurs.
 * @param  {generator} saga                      saga to fork
 * @param  {function} [handleError=defaultError] optional custom error handler
 * @param  {any} args                            args to pass to saga
 * @return {function}                            fork cancelation handler
 */
export const spork = (saga, handleError = defaultError, ...args) => fork(wrap, saga, handleError, args)

// ========================================
// AUTO-RESTART SAGA
// ========================================

export const autoRestart = (generator, handleError = defaultError) => {
  return function * autoRestarting (...args) {
    while (true) {
      try {
        yield call(generator, ...args)
        break
      } catch (e) {
        yield handleError(e)
      }
    }
  }
}
