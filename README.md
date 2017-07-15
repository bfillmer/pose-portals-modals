
# Playground

General React playground for experimenting with new things.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Overview

* Generally the playground contains the latest and greatest variation in how I think of structuring a React application.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `redux-first-router` (https://github.com/faceyspacey/redux-first-router)
* `redux-saga` (https://redux-saga.js.org/)
* `redux-actions` (https://github.com/acdlite/redux-actions)

## Notes on Routing

Routes are state. In this implementation that state is stored in Redux and managed primarily by `redux-first-router`. There are three mappings of route state, the impelmentation of actual browser url to type (`state/routes`), the mapping of types to UI components (`view/Routes`), and the mapping of types to sagas for side-effects (`state/sagas/routes`).

## Notes on Tasks & Messages

Generic tasks & messages reducers are useful in just about every application, thus the boilerplate here. Tasks are a generic holding spot for keeping track of things such as showing loaders during async calls and the like. Messaging is useful for errors or any other type of information to be displayed to the user.
