
# Greenfield

Opinionated application organization and libraries for bootstrapping new React-based applications.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Commands

```bash
npm i # install dependencies
npm start # development server
npm test # Jest in watch-mode
npm run coverage # Jest coverage report
npm run lint # fix basic linting errors
npm run build # production build
npm run clean # clears node_modules
```

## Overview

* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* `styled-system` useful utility belt for styled-components (http://jxnblk.com/styled-system/)
* `curi` routing (https://curi.js.org/)
* `redux-saga` side-effects (https://redux-saga.js.org/)
* `redux-actions` simplify actions boilerplate (https://github.com/acdlite/redux-actions)
* `axios` just-works http client (https://github.com/axios/axios)
* `redux-data-structures` reducer creators for most use cases (https://redux-data-structures.js.org/)
