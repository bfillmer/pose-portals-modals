
import React from 'react'
import {connect} from 'react-redux'

import {routeType} from 'selectors'
import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

import {Home} from 'view/Screens/Home'
import {About} from 'view/Screens/About'

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
