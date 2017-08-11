
import React from 'react'
import Link from 'redux-first-router-link'

import {routeHome} from 'actions'

import {Section} from 'view/Shared/Section'
import {H1, P} from 'view/Shared/Typography'

export const About = () => (
  <Section>
    <H1>About</H1>
    <P>Head to the <Link to={routeHome()}>Home Page</Link>.</P>
  </Section>
)
