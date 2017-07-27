
import {handleActions} from 'redux-actions'

import {UPDATED_NAME} from 'types'

const initialState = {
  name: ''
}

const updateName = (state, {payload}) => Object.assign({}, state, { name: payload })

export const profileReducer = handleActions({
  [UPDATED_NAME]: updateName
}, initialState)
