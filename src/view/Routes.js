
import React from 'react'
import {connect} from 'react-redux'

import {routeType} from 'selectors'
import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

import {About} from 'view/About'
import {Home} from 'view/Home'

const routesMap = {
  [ROUTE_HOME]: Home,
  [ROUTE_ABOUT]: About
}

const mapStateToProps = state => ({
  route: routeType(state)
})

const Container = ({route}) => {
  const Route = routesMap[route] ? routesMap[route] : routesMap[ROUTE_HOME]
  return (
    <Route />
  )
}

export const Routes = connect(mapStateToProps)(Container)
