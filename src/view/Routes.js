
import React from 'react'
import {connect} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'

import {routeType} from 'selectors'
import {HOME, ABOUT} from 'types'
import {About} from 'view/About'
import {Home} from 'view/Home'

const routesMap = {
  [HOME]: Home,
  [ABOUT]: About,
  [NOT_FOUND]: Home
}

const mapStateToProps = state => ({
  route: routeType(state)
})

const Container = ({route}) => {
  const Route = routesMap[route]
  return (
    <Route />
  )
}

export const Routes = connect(mapStateToProps)(Container)
