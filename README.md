
# Playground

General React playground for experimenting with new things. Running build available at https://playground-hfvzslencp.now.sh.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Overview

* Generally the playground contains the latest and greatest variation in how I think of structuring a React application.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `redux-first-router` (https://github.com/faceyspacey/redux-first-router)
* `redux-saga` (https://redux-saga.js.org/)
* `redux-actions` (https://github.com/acdlite/redux-actions)
* Streamlined snapshot testing leveraging actions exported from Redux DevTools.

## Notes on Routing

Routes are state. In this implementation that state is stored in Redux and managed primarily by `redux-first-router`. There are three mappings of route state, the impelmentation of actual browser url to type (`state/routes`), the mapping of types to UI components (`view/Routes`), and the mapping of types to sagas for side-effects (`state/sagas/routes`).

## Notes on Interactions & Messages

Generic UI interactions & messages reducers are useful in just about every application, thus the boilerplate here. Interactions are a generic holding spot for keeping track of things such as showing loaders during async calls and the like. Messaging is useful for errors or any other type of information to be displayed to the user.

## Notes on Jest Snapshot Tests

With a Redux-based store such as our UI is a function of our state, `f(S) = UI`. Because of this our snapshot tests state that at any given moment in time some UI visual we have determined to be *correct* the corresponding state should always render that UI. Thanks to the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) extension for Chrome setting up tests in this manner simply becomes a matter of exporting the actions performed to arrive at that UI state, then rendering the top-level `<App />` component with that state.
