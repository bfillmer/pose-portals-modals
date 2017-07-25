/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {reducers} from 'state/reducers'
import {App} from 'view/App'

// Run a snapshot test that renders the entire application with a given Redux store, parsing
// actions exported using redux-dev-tools.
export const createSnapshot = (description, payload) => {
  const actionsArray = JSON.parse(payload)
  // Create a new store to avoid polluting the test.
  const store = createStore(reducers)
  // Replay the actions in order to end up with our needed state for our expected UI visual.
  actionsArray.map(store.dispatch)
  // Perform a full tree render test for this snapshot.
  test(`[SNAP] ${description}`, () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
}
