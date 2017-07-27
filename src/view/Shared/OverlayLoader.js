
import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {OVERLAY_LOADER} from 'types'

const Scrim = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({theme}) => theme.grays.dark};
`

const Overlay = () => (
  <Scrim />
)

const mapStateToProps = state => ({
  show: state.interactions.includes(OVERLAY_LOADER)
})

const Loader = ({show}) => show ? <Overlay /> : null

export const OverlayLoader = connect(mapStateToProps)(Loader)
