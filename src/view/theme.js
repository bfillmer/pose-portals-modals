
import {injectGlobal} from 'styled-components'

const gray = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121'
}

const primary = {
  base: '#80deea',
  light: '#b4ffff',
  dark: '#4bacb8'
}

const secondary = {
  base: '#ff5722',
  light: '#ff8a50',
  dark: '#c41c00'
}

const space = {
  quarter: '0.25rem',
  half: '0.5rem',
  base: '1rem',
  double: '2rem'
}

// Reusable definitions for colors, spacings, etc.
export const theme = {
  primary,
  secondary,
  gray,
  space
}

// Inject some global styles that are most likely to be coupled to theme variables.
injectGlobal`
  html {
    /* 1rem = 16px */
    font-size: 16px;
  }
  body {
    font-weight: normal;
    font-family: sans-serif;
    background-color: ${gray['50']};
  }
`

// Simple helper function, takes in any number of arguments and maps to nested properties within the
// theme object and returns the value.
export const getTheme = (...args) => ({theme}) => args.reduce((t, p) => t[p], theme)
