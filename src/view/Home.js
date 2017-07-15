
import React from 'react'
import Link from 'redux-first-router-link'

import {routeAbout} from 'actions'

const aboutAction = routeAbout()

export const Home = () => (
  <p>Head to the <Link to={aboutAction}>About Page</Link>.</p>
)
