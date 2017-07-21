
import {createAction} from 'redux-actions'

import * as types from 'types'

// ROUTING
export const routeHome = createAction(types.ROUTE_HOME)
export const routeAbout = createAction(types.ROUTE_ABOUT)

// MESSAGES
export const addMessage = createAction(
  types.ADDED_MESSAGE,
  (id, type, view, payload) => ({id, type, view, payload})
)
export const removeMessage = createAction(types.REMOVED_MESSAGE)

// TASKS
export const addTask = createAction(types.ADDED_TASK)
export const removeTask = createAction(types.REMOVED_TASK)
