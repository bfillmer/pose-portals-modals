/* global test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {reducers} from 'state/reducers'
import {App} from 'view/App'

// Import our actions to get to the expected state for any given snapshot.
import homeData from './Home.json'
import aboutData from './About.json'

// Map our test descriptions to the correct set of actions.
const snapshotMap = {
  'Home view loads and renders as expected': JSON.parse(homeData.payload),
  'About view loads and renders as expected': JSON.parse(aboutData.payload)
}

// Iterate through our tests and run them.
Object.keys(snapshotMap).map((description) => {
  // Actions that ran to arrive at the state needed for our snapshot render.
  const actionsArray = snapshotMap[description]
  // Create a new store to avoid polluting the test.
  const store = createStore(reducers)
  // Replay the actions in order to end up with our needed state for our expected UI visual.
  actionsArray.map(store.dispatch)
  // Perform a full tree render test for this snapshot.
  test(description, () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
