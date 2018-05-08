
import React from 'react'
import {connect} from 'react-redux'

import {routeType} from 'selectors'
import {ROUTE_HOME} from 'router'

import {Home} from 'view/Screens/Home'

const routesMap = {
  [ROUTE_HOME]: Home
}

const mapStateToProps = state => ({
  route: routeType(state)
})

function Container ({route}) {
  const Route = routesMap[route] ? routesMap[route] : routesMap[ROUTE_HOME]
  return (<Route />)
}

export const Routes = connect(mapStateToProps)(Container)
