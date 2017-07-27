
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

// INTERACTIONS
export const addInteraction = createAction(types.ADDED_INTERACTION)
export const removeInteraction = createAction(types.REMOVED_INTERACTION)

// PROFILE
export const updateName = createAction(types.UPDATED_NAME)
