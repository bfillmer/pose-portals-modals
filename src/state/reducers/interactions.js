
import {list} from 'redux-data-structures'

import {ADDED_INTERACTION, REMOVED_INTERACTION} from 'types'

export const interactionsReducer = list({
  pushActionTypes: [ADDED_INTERACTION],
  popActionTypes: [REMOVED_INTERACTION]
})
