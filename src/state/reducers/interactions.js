
import {handleActions} from 'redux-actions'

import {ADDED_INTERACTION, REMOVED_INTERACTION} from 'types'

const initialState = []

const addInteraction = (state, {payload}) => [payload, ...state]
const removeInteraction = (state, {payload}) => state.filter(t => t !== payload)

export const interactionsReducer = handleActions({
  [ADDED_INTERACTION]: addInteraction,
  [REMOVED_INTERACTION]: removeInteraction
}, initialState)
