
import {handleActions} from 'redux-actions'

import {ADDED_TASK, REMOVED_TASK} from 'types'

const initialState = []

const addTask = (state, {payload}) => [payload, ...state]
const removeTask = (state, {payload}) => state.filter(t => t !== payload)

export const tasksReducer = handleActions({
  [ADDED_TASK]: addTask,
  [REMOVED_TASK]: removeTask
}, initialState)
