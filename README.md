
# Greenfield

Opinionated application organization and libraries for bootstrapping new React-based applications.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Commands

```bash
yarn start # development server
yarn build # production build
yarn test # Jest in watch-mode
yarn coverage # Jest coverage report
yarn lint # fix basic linting errors
```

## Overview

* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* `redux-first-router` routing as state (https://github.com/faceyspacey/redux-first-router)
* `redux-saga` side-effects (https://redux-saga.js.org/)
* `redux-actions` simplify actions boilerplate (https://github.com/acdlite/redux-actions)
* `redux-data-structures` simplify reducer boilerplate (https://redux-data-structures.js.org/)
* `axios` just-works http client (https://github.com/axios/axios)

## Notes on Routing

Routes are state. In this implementation that state is stored in Redux and managed primarily by `redux-first-router`. There are three mappings of route state, the impelmentation of actual browser url to type (`state/routes`), the mapping of types to UI components (`view/Routes`), and the mapping of types to sagas for side-effects (`state/sagas/routes`).
