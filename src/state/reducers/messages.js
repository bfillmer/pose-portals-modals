
import {list} from 'redux-data-structures'

import {ADDED_MESSAGE, REMOVED_MESSAGE} from 'types'

export const messagesReducer = list({
  pushActionTypes: [ADDED_MESSAGE],
  popActionTypes: [REMOVED_MESSAGE]
})
