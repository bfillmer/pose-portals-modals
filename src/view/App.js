
import React from 'react'
import styled from 'styled-components'

import {Header} from 'view/Header'
import {Routes} from 'view/Routes'

// GLOBAL WRAPPER
const Wrapper = styled.div`
  text-align: center;
`

export const App = () => (
  <Wrapper>
    <Header />
    <Routes />
  </Wrapper>
)
