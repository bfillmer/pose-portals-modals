
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

const Wrapper = styled.header`
  text-align: center;
  background-color: ${({theme}) => theme.grays.dark};
  height: 150px;
  padding: 20px;
  color: ${({theme}) => theme.white};
`

// HEADER COMPOSITION
export const Header = () => (
  <Wrapper>
    <Logo src={logo} alt='logo' />
    <h2>Welcome to React</h2>
  </Wrapper>
)
