
import {combineReducers} from 'redux'

import {reducer as routesReducer} from 'state/routes'
import {messagesReducer} from 'state/reducers/messages'
import {interactionsReducer} from 'state/reducers/interactions'
import {profileReducer} from 'state/reducers/profile'

export const reducers = combineReducers({
  location: routesReducer,
  messages: messagesReducer,
  interactions: interactionsReducer,
  profile: profileReducer
})
