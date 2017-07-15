
import React from 'react'
import Link from 'redux-first-router-link'
import styled from 'styled-components'

import {routeAbout} from 'actions'

const Intro = styled.p`
  font-size: large
`

export const Home = () => (
  <Intro>
    Head to the <Link to={routeAbout()}>About Page</Link>.
  </Intro>
)
