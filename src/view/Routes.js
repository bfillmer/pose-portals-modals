
import React from 'react'
import {connect} from 'react-redux'

import {routeType} from 'selectors'
import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

import {Home} from 'view/Home'
import {About} from 'view/About'

const routesMap = {
  [ROUTE_HOME]: Home,
  [ROUTE_ABOUT]: About
}

const mapStateToProps = state => ({
  route: routeType(state)
})

function Container ({route}) {
  const Route = routesMap[route] ? routesMap[route] : routesMap[ROUTE_HOME]
  return (<Route />)
}

export const Routes = connect(mapStateToProps)(Container)
