
import {createAction} from 'redux-actions'

import * as types from 'types'

// ROUTING
export const routeHome = createAction(types.HOME)
export const routeAbout = createAction(types.ABOUT)

// MESSAGES
const addMessagePayload = (id, type, view, payload) => ({id, type, view, payload})
export const addMessage = createAction(types.ADDED_MESSAGE, addMessagePayload)
export const removeMessage = createAction(types.REMOVED_MESSAGE)

// TASKS
export const addTask = createAction(types.ADDED_TASK)
export const removeTask = createAction(types.REMOVED_TASK)
