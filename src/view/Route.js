
import React from 'react'
import {connect} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'

import {HOME, ABOUT} from 'types'
import {About} from 'view/About'
import {Home} from 'view/Home'

const routesMap = {
  [HOME]: Home,
  [ABOUT]: About,
  [NOT_FOUND]: Home
}

const mapStateToProps = state => ({
  route: state.location.type
})

const Container = ({route}) => {
  const Current = routesMap[route]
  return (
    <Current />
  )
}

export const Route = connect(mapStateToProps)(Container)
