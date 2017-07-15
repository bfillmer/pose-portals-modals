
import {handleActions} from 'redux-actions'

import {ADDED_MESSAGE, REMOVED_MESSAGE} from 'types'

const initialState = []

/**
 * Describes a generic message object, and sets sensible defaults.
 * @param  {string} payload.id      Unique identifier for this message.
 * @param  {string} payload.type    Useful for filtering or visual differences.
 * @param  {string} payload.view    The UI view that should display this message.
 * @param  {(string|object)} payload.payload Message payload, shape should match UI expectations.
 * @return {object}         Message object.
 */
const message = ({id, type = 'MESSAGE', view = 'TOAST', payload = ''}) => ({id, type, view, payload})

const addMessage = (state, {payload}) => [message(payload), ...state]
const removeMessage = (state, {payload}) => state.filter(m => m.id !== payload)

export const messagesReducer = handleActions({
  [ADDED_MESSAGE]: addMessage,
  [REMOVED_MESSAGE]: removeMessage
}, initialState)
