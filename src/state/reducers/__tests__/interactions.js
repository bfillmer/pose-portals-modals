/* global describe, expect, test */

import {addInteraction, removeInteraction} from 'actions'
import {interactionsReducer} from 'state/reducers/interactions'

describe('[UNIT] interactionsReducer handles actions correctly', () => {
  test('ADDED_INTERACTION', () => {
    const initialState = []
    const interaction = 'ADD_INTERACTION'
    const expected = [interaction]
    const action = addInteraction(interaction)
    const actual = interactionsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  test('REMOVED_INTERACTION', () => {
    const interaction = 'REMOVE_INTERACTION'
    const initialState = [interaction]
    const expected = []
    const action = removeInteraction(interaction)
    const actual = interactionsReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
