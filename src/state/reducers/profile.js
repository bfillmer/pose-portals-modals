
import {handleActions} from 'redux-actions'

const initialState = {
  name: 'React'
}

export const profileReducer = handleActions({}, initialState)
