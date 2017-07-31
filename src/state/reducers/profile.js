
import {combineReducers} from 'redux'
import {value} from 'redux-data-structures'

import {UPDATED_NAME} from 'types'

const name = value({
  setActionTypes: [UPDATED_NAME]
})

export const profileReducer = combineReducers({
  name
})
