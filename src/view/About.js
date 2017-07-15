
import React from 'react'
import Link from 'redux-first-router-link'

import {routeHome} from 'actions'

const homeAction = routeHome()

export const About = () => (
  <p>Head to the <Link to={homeAction}>Home Page</Link>.</p>
)
