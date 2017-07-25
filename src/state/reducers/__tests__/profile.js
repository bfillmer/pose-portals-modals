/* global describe, expect, test */

import {updateName} from 'actions'
import {profileReducer} from 'state/reducers/profile'

describe('[UNIT] profileReducer handles actions correctly', () => {
  test('UPDATED_NAME', () => {
    const name = 'React'
    const expected = {
      name
    }
    const initialState = {
      name: ''
    }
    const action = updateName(name)
    const actual = profileReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
