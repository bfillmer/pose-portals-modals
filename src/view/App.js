
import React from 'react'
import {connect} from 'react-redux'

import {HOME, ABOUT} from 'types'
import {Wrapper, Header} from 'view/Global'
import {About} from 'view/About'
import {Home} from 'view/Home'

const routesMap = {
  [HOME]: Home,
  [ABOUT]: About
}

const mapStateToProps = state => ({
  route: state.location.type
})

const Container = ({route}) => {
  const Route = routesMap[route]
  return (
    <Wrapper>
      <Header />
      <Route />
    </Wrapper>
  )
}

export const App = connect(mapStateToProps)(Container)
