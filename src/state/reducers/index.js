
import {combineReducers} from 'redux'

import {reducer as routesReducer} from 'state/routes'
import {messagesReducer} from 'state/reducers/messages'
import {tasksReducer} from 'state/reducers/tasks'

export const reducers = combineReducers({
  location: routesReducer,
  messages: messagesReducer,
  tasks: tasksReducer
})
