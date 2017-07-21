/* global describe, expect, test */

import {addMessage, removeMessage} from 'actions'
import {message as messageDefaults, messagesReducer} from 'state/reducers/messages'

test('message function returns expected defaults', () => {
  const id = 'an-id'
  const expected = {
    id,
    type: 'MESSAGE',
    view: 'TOAST',
    payload: ''
  }
  const actual = messageDefaults({id})
  expect(actual).toEqual(expected)
})

describe('messagesReducer handles actions correctly', () => {
  test('ADDED_MESSAGE', () => {
    const initialState = []
    const [id, type, view] = ['error-1', 'ERROR', 'MODAL']
    // Payload can be of any type as it is coupled primarily to the view it
    // will be displayed in.
    const payload = {
      title: 'Title',
      text: 'Longer text.'
    }
    const message = {
      id,
      type,
      view,
      payload
    }
    const expected = [message]
    const action = addMessage(id, type, view, payload)
    const actual = messagesReducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  test('REMOVED_MESSAGE', () => {
    const id = 'message-2'
    const initialState = [
      {
        id,
        type: 'MESSAGE',
        view: 'TOASTER',
        payload: 'Toaster payloads could be simply strings.'
      }
    ]
    const expected = []
    const action = removeMessage(id)
    const actual = messagesReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
