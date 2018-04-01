
import React from 'react'
import {ThemeProvider} from 'styled-components'

import {Application} from 'view/Shared/Structural'
import {Header} from 'view/Global/Header'
import {Routes} from 'view/Routes'

import {theme} from 'view/theme'

export function App () {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Header />
        <Routes />
      </Application>
    </ThemeProvider>
  )
}
