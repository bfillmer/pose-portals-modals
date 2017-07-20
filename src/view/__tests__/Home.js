/* global test, expect */

// @TODO Generalize this whole test file so we can create new tests that use new json data, and a
// test description.
import React from 'react'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {reducers} from 'state/reducers'

import {App} from 'view/App'

// Actions that got us to the expected UI visual.
import data from './Home.json'
const actionsArray = JSON.parse(data.payload)

const store = createStore(reducers)

// Replay the actions in order to end up with our needed state for our expected UI visual.
actionsArray.map(store.dispatch)

test('Home view loads and renders as expected', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
