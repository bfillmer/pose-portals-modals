
import React from 'react'
import styled, {keyframes} from 'styled-components'

import logo from 'assets/logo.svg'

// HEADER COMPONENTS
const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`

const HeaderContainer = styled.header`
  text-align: center;
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

// HEADER COMPOSITION
export const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt='logo' />
    <h2>Welcome to React</h2>
  </HeaderContainer>
)
