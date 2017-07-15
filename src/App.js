
import React from 'react'
import styled, {keyframes} from 'styled-components'

import logo from 'logo.svg'

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`

const Intro = styled.p`
  font-size: large;
`

export const App = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt='logo' />
      <h2>Welcome to React</h2>
    </Header>
    <Intro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
  </Wrapper>
)
