
import React from 'react'
import {connect} from 'react-redux'
import styled, {keyframes} from 'styled-components'

import {getTheme} from 'view/theme'

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
  background-color: ${getTheme('grays', 'dark')};
  height: 150px;
  padding: 20px;
  color: ${getTheme('white')};
`

const mapStateToProps = state => ({
  name: state.profile.name
})

// HEADER COMPOSITION
const Container = ({name}) => (
  <Wrapper>
    <Logo src={logo} alt='logo' />
    <h2>Welcome to {name}</h2>
  </Wrapper>
)

export const Header = connect(mapStateToProps)(Container)
