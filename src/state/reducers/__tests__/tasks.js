/* global describe, expect, test */

import {addTask, removeTask} from 'actions'
import {tasksReducer} from 'state/reducers/tasks'

describe('tasksReducer handles actions correctly', () => {
  test('ADDED_TASK', () => {
    const initialState = []
    const task = 'ADD_TASK'
    const expected = [task]
    const action = addTask(task)
    const actual = tasksReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
  test('REMOVED_TASK', () => {
    const task = 'REMOVE_TASK'
    const initialState = [task]
    const expected = []
    const action = removeTask(task)
    const actual = tasksReducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
